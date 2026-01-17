'use client';

/**
 * RelationshipGraph Component
 * Phase 4, Task 13 - HISAGEN Knowledge Base
 * Phase B+C: Visual Design + Interactivity
 *
 * Displays an interactive force-directed graph of HISAGEN relationships
 */

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import ForceGraph2D, { ForceGraphMethods } from 'react-force-graph-2d';
import { graphData } from '@/data/relationships';
import { GraphNode, NodeType, NODE_COLORS, NODE_TYPE_LABELS } from '@/types/graph';

interface GraphNodeObject {
  id: string;
  type: string;
  label: string;
  description?: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface GraphLinkObject {
  source: GraphNodeObject | string;
  target: GraphNodeObject | string;
  type: string;
  label?: string;
}

interface RelationshipGraphProps {
  activeFilters: Set<NodeType>;
}

export default function RelationshipGraph({ activeFilters }: RelationshipGraphProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<ForceGraphMethods<any, any> | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Filter nodes and edges based on active filters
  const graphDataFormatted = useMemo(() => {
    const filteredNodes = graphData.nodes
      .filter(node => activeFilters.has(node.type))
      .map(node => ({
        id: node.id,
        type: node.type,
        label: node.label,
        description: node.description,
        kbEntryIds: node.kbEntryIds,
        metadata: node.metadata,
        // Fix HISAGEN at center
        ...(node.id === 'hisagen' ? { fx: 0, fy: 0 } : {}),
      }));

    const nodeIds = new Set(filteredNodes.map(n => n.id));

    const filteredEdges = graphData.edges
      .filter(edge => nodeIds.has(edge.source) && nodeIds.has(edge.target))
      .map(edge => ({
        source: edge.source,
        target: edge.target,
        type: edge.type,
        label: edge.label,
      }));

    return {
      nodes: filteredNodes,
      links: filteredEdges,
    };
  }, [activeFilters]);

  // Get connected node IDs for hover highlighting
  const getConnectedNodes = useCallback((nodeId: string): Set<string> => {
    const connected = new Set<string>([nodeId]);
    graphData.edges.forEach(edge => {
      if (edge.source === nodeId) connected.add(edge.target);
      if (edge.target === nodeId) connected.add(edge.source);
    });
    return connected;
  }, []);

  // Handle container resize and mobile detection
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width || 800,
          height: Math.max(rect.height, 500),
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Center graph after initial load and when filters change
  useEffect(() => {
    if (graphRef.current) {
      setTimeout(() => {
        graphRef.current?.zoomToFit(400, 60);
      }, 800);
    }
  }, [activeFilters]);

  // Custom node rendering with hover effects
  const nodeCanvasObject = useCallback(
    (node: GraphNodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const label = node.label || node.id;
      const fontSize = 12 / globalScale;
      const nodeColor = NODE_COLORS[node.type as keyof typeof NODE_COLORS] || '#888';
      const isHisagen = node.id === 'hisagen';
      const nodeRadius = isHisagen ? 16 : 9;

      // Determine if this node should be highlighted or dimmed
      const isHovered = hoveredNode === node.id;
      const isConnectedToHovered = hoveredNode ? getConnectedNodes(hoveredNode).has(node.id) : false;
      const shouldDim = hoveredNode && !isHovered && !isConnectedToHovered;
      const isSelected = selectedNode?.id === node.id;

      // Draw glow effect for HISAGEN
      if (isHisagen && !shouldDim) {
        ctx.beginPath();
        ctx.arc(node.x || 0, node.y || 0, nodeRadius + 6, 0, 2 * Math.PI);
        ctx.fillStyle = `${nodeColor}15`;
        ctx.fill();
      }

      // Draw node circle
      ctx.beginPath();
      ctx.arc(node.x || 0, node.y || 0, nodeRadius, 0, 2 * Math.PI);
      ctx.fillStyle = shouldDim ? `${nodeColor}40` : nodeColor;
      ctx.fill();

      // Add border
      if (isSelected) {
        ctx.strokeStyle = '#1F2E3A';
        ctx.lineWidth = 3 / globalScale;
        ctx.stroke();
      } else if (isHovered) {
        ctx.strokeStyle = nodeColor;
        ctx.lineWidth = 3 / globalScale;
        ctx.stroke();
      } else {
        ctx.strokeStyle = shouldDim ? '#ffffff60' : '#ffffff';
        ctx.lineWidth = 2 / globalScale;
        ctx.stroke();
      }

      // Draw label
      ctx.font = `${isHisagen ? '600' : '500'} ${fontSize}px Inter, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = shouldDim ? '#33415540' : '#334155';
      ctx.fillText(label, node.x || 0, (node.y || 0) + nodeRadius + 4);
    },
    [selectedNode, hoveredNode, getConnectedNodes]
  );

  // Custom link rendering with hover effects
  const linkCanvasObject = useCallback(
    (link: GraphLinkObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const source = typeof link.source === 'object' ? link.source : null;
      const target = typeof link.target === 'object' ? link.target : null;

      if (!source || !target) return;

      const sourceId = source.id;
      const targetId = target.id;

      // Determine if this link should be highlighted or dimmed
      const isConnectedToHovered = hoveredNode &&
        (sourceId === hoveredNode || targetId === hoveredNode);
      const shouldDim = hoveredNode && !isConnectedToHovered;

      // Draw line
      ctx.beginPath();
      ctx.moveTo(source.x || 0, source.y || 0);
      ctx.lineTo(target.x || 0, target.y || 0);
      ctx.strokeStyle = shouldDim ? '#CBD5E120' : (isConnectedToHovered ? '#94a3b8' : '#CBD5E1');
      ctx.lineWidth = isConnectedToHovered ? 2.5 : 1.5;
      ctx.stroke();

      // Draw arrow
      const arrowLength = 6;
      const dx = (target.x || 0) - (source.x || 0);
      const dy = (target.y || 0) - (source.y || 0);
      const angle = Math.atan2(dy, dx);
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Position arrow at 85% along the line (before target node)
      const arrowPos = 0.85;
      const arrowX = (source.x || 0) + dx * arrowPos;
      const arrowY = (source.y || 0) + dy * arrowPos;

      if (dist > 30) {
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(
          arrowX - arrowLength * Math.cos(angle - Math.PI / 6),
          arrowY - arrowLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          arrowX - arrowLength * Math.cos(angle + Math.PI / 6),
          arrowY - arrowLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fillStyle = shouldDim ? '#94a3b820' : (isConnectedToHovered ? '#64748b' : '#94a3b8');
        ctx.fill();
      }

      // Draw edge label on hover
      if (isConnectedToHovered && link.label) {
        const midX = (source.x || 0) + dx * 0.5;
        const midY = (source.y || 0) + dy * 0.5;

        ctx.font = `500 ${10 / globalScale}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const textWidth = ctx.measureText(link.label).width;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(midX - textWidth / 2 - 4, midY - 6, textWidth + 8, 12);

        ctx.fillStyle = '#64748b';
        ctx.fillText(link.label, midX, midY);
      }
    },
    [hoveredNode]
  );

  // Handle node click
  const handleNodeClick = useCallback((node: GraphNodeObject) => {
    const originalNode = graphData.nodes.find(n => n.id === node.id);
    setSelectedNode(originalNode || null);
  }, []);

  // Handle node hover
  const handleNodeHover = useCallback((node: GraphNodeObject | null) => {
    setHoveredNode(node?.id || null);
  }, []);

  // Handle background click to deselect
  const handleBackgroundClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Reset view button handler
  const handleResetView = useCallback(() => {
    graphRef.current?.zoomToFit(400, 60);
  }, []);

  // Get portal page for selected node
  const getPortalPage = (node: GraphNode): string | null => {
    return node.metadata?.portalPage || null;
  };

  // Mobile view
  if (isMobile) {
    return (
      <div className="rounded-2xl border border-mist bg-parchment/40 p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-secondary font-serif mb-2">
          Desktop Recommended
        </h3>
        <p className="text-sm text-slate max-w-sm mx-auto leading-relaxed">
          The relationship graph is best viewed on a larger screen. Please visit this page on a desktop or tablet for the full interactive experience.
        </p>
        <div className="mt-6 p-4 rounded-lg bg-white border border-mist">
          <p className="text-xs text-slate/60 font-medium uppercase tracking-wider mb-2">Quick Stats</p>
          <p className="text-2xl font-bold text-secondary">{graphData.nodes.length}</p>
          <p className="text-xs text-slate">entities in the network</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-320px)] min-h-[480px] gap-4">
      {/* Graph Canvas */}
      <div
        ref={containerRef}
        className="flex-1 rounded-2xl border border-mist bg-white overflow-hidden relative"
      >
        <ForceGraph2D
          ref={graphRef}
          graphData={graphDataFormatted}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="#ffffff"
          nodeCanvasObject={nodeCanvasObject}
          nodePointerAreaPaint={(node: GraphNodeObject, color: string, ctx: CanvasRenderingContext2D) => {
            ctx.beginPath();
            ctx.arc(node.x || 0, node.y || 0, 16, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
          }}
          linkCanvasObject={linkCanvasObject}
          linkPointerAreaPaint={(link: GraphLinkObject, invisibleColor: string, ctx: CanvasRenderingContext2D) => {
            const source = typeof link.source === 'object' ? link.source : null;
            const target = typeof link.target === 'object' ? link.target : null;
            if (!source || !target) return;

            ctx.beginPath();
            ctx.moveTo(source.x || 0, source.y || 0);
            ctx.lineTo(target.x || 0, target.y || 0);
            ctx.strokeStyle = invisibleColor;
            ctx.lineWidth = 8;
            ctx.stroke();
          }}
          onNodeClick={handleNodeClick}
          onNodeHover={handleNodeHover}
          onBackgroundClick={handleBackgroundClick}
          cooldownTicks={100}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
          enableNodeDrag={true}
          enableZoomInteraction={true}
          enablePanInteraction={true}
        />

        {/* Reset View Button */}
        <button
          onClick={handleResetView}
          className="absolute bottom-4 right-4 px-3 py-1.5 text-xs font-medium bg-white border border-mist rounded-lg shadow-sm hover:bg-parchment transition-colors text-slate"
        >
          Reset View
        </button>

        {/* Node count indicator */}
        <div className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium bg-white/90 border border-mist rounded-lg text-slate">
          {graphDataFormatted.nodes.length} nodes · {graphDataFormatted.links.length} connections
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-72 rounded-2xl border border-mist bg-parchment/60 p-5 overflow-y-auto">
        {selectedNode ? (
          <div>
            <div className="mb-4">
              <span
                className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3"
                style={{
                  backgroundColor: NODE_COLORS[selectedNode.type] + '20',
                  color: NODE_COLORS[selectedNode.type],
                }}
              >
                {NODE_TYPE_LABELS[selectedNode.type]}
              </span>
              <h3 className="text-xl font-semibold text-secondary font-serif">
                {selectedNode.label}
              </h3>
            </div>

            {selectedNode.description && (
              <p className="text-sm text-slate leading-relaxed mb-4">
                {selectedNode.description}
              </p>
            )}

            {/* View in KB button */}
            {getPortalPage(selectedNode) && (
              <Link
                href={getPortalPage(selectedNode)!}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 mb-4 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                View Full Profile
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            )}

            {selectedNode.metadata && Object.keys(selectedNode.metadata).filter(k => k !== 'portalPage').length > 0 && (
              <div className="mb-4 p-3 rounded-lg bg-white border border-mist">
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">
                  Details
                </h4>
                <dl className="space-y-1">
                  {Object.entries(selectedNode.metadata)
                    .filter(([key]) => key !== 'portalPage')
                    .map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <dt className="text-slate/60 inline capitalize">{key}: </dt>
                        <dd className="text-ink inline font-medium">{value}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            )}

            {selectedNode.kbEntryIds && selectedNode.kbEntryIds.length > 0 && (
              <div className="p-3 rounded-lg bg-white border border-mist">
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">
                  Related KB Entries
                </h4>
                <ul className="space-y-1.5">
                  {selectedNode.kbEntryIds.map(id => (
                    <li key={id}>
                      <span className="text-sm text-slate/60">{id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-mist/50 flex items-center justify-center">
              <svg className="w-6 h-6 text-slate/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <p className="text-sm text-slate">Click a node to see details</p>
            <p className="text-xs text-slate/60 mt-1">Hover to highlight connections</p>
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 pt-4 border-t border-mist">
          <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-3">
            Legend
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(NODE_COLORS).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <span className="text-[11px] text-slate">
                  {NODE_TYPE_LABELS[type as keyof typeof NODE_TYPE_LABELS]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Controls hint */}
        <div className="mt-4 pt-3 border-t border-mist/50">
          <p className="text-[10px] text-slate/50 leading-relaxed">
            <strong>Controls:</strong> Scroll to zoom, drag to pan, drag nodes to reposition
          </p>
        </div>
      </div>
    </div>
  );
}
