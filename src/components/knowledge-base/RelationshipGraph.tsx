'use client';

/**
 * RelationshipGraph Component
 * Phase 4, Task 13 - HISAGEN Knowledge Base
 *
 * Displays an interactive force-directed graph of HISAGEN relationships
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import ForceGraph2D, { ForceGraphMethods } from 'react-force-graph-2d';
import { graphData } from '@/data/relationships';
import { GraphNode, NODE_COLORS, NODE_TYPE_LABELS } from '@/types/graph';

interface GraphNodeObject {
  id: string;
  type: string;
  label: string;
  description?: string;
  x?: number;
  y?: number;
  fx?: number;
  fy?: number;
}

export default function RelationshipGraph() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<ForceGraphMethods<any, any> | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  // Transform data for react-force-graph format
  const graphDataFormatted = {
    nodes: graphData.nodes.map(node => ({
      id: node.id,
      type: node.type,
      label: node.label,
      description: node.description,
      kbEntryIds: node.kbEntryIds,
      metadata: node.metadata,
    })),
    links: graphData.edges.map(edge => ({
      source: edge.source,
      target: edge.target,
      type: edge.type,
      label: edge.label,
    })),
  };

  // Handle container resize
  useEffect(() => {
    const updateDimensions = () => {
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

  // Center graph on HISAGEN after initial load
  useEffect(() => {
    if (graphRef.current) {
      setTimeout(() => {
        graphRef.current?.zoomToFit(400, 50);
      }, 500);
    }
  }, []);

  // Custom node rendering
  const nodeCanvasObject = useCallback(
    (node: GraphNodeObject, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const label = node.label || node.id;
      const fontSize = 12 / globalScale;
      const nodeColor = NODE_COLORS[node.type as keyof typeof NODE_COLORS] || '#888';
      const nodeRadius = node.id === 'hisagen' ? 14 : 8;

      // Draw node circle
      ctx.beginPath();
      ctx.arc(node.x || 0, node.y || 0, nodeRadius, 0, 2 * Math.PI);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      // Add border for selected node
      if (selectedNode?.id === node.id) {
        ctx.strokeStyle = '#1F2E3A';
        ctx.lineWidth = 3 / globalScale;
        ctx.stroke();
      } else {
        // Light border for all nodes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2 / globalScale;
        ctx.stroke();
      }

      // Draw label
      ctx.font = `500 ${fontSize}px Inter, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = '#334155'; // slate color
      ctx.fillText(label, node.x || 0, (node.y || 0) + nodeRadius + 3);
    },
    [selectedNode]
  );

  // Handle node click
  const handleNodeClick = useCallback((node: GraphNodeObject) => {
    const originalNode = graphData.nodes.find(n => n.id === node.id);
    setSelectedNode(originalNode || null);
  }, []);

  // Handle background click to deselect
  const handleBackgroundClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  return (
    <div className="flex h-[calc(100vh-280px)] min-h-[500px] gap-4">
      {/* Graph Canvas */}
      <div
        ref={containerRef}
        className="flex-1 rounded-2xl border border-mist bg-white overflow-hidden"
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
            ctx.arc(node.x || 0, node.y || 0, 14, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();
          }}
          linkColor={() => '#CBD5E1'}
          linkWidth={2}
          linkDirectionalArrowLength={5}
          linkDirectionalArrowRelPos={0.9}
          linkDirectionalArrowColor={() => '#94a3b8'}
          onNodeClick={handleNodeClick}
          onBackgroundClick={handleBackgroundClick}
          cooldownTicks={100}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
        />
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

            {selectedNode.metadata && Object.keys(selectedNode.metadata).length > 0 && (
              <div className="mb-4 p-3 rounded-lg bg-white border border-mist">
                <h4 className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">
                  Details
                </h4>
                <dl className="space-y-1">
                  {Object.entries(selectedNode.metadata).map(([key, value]) => (
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
                      <span className="text-sm text-primary hover:underline cursor-pointer">
                        {id}
                      </span>
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
      </div>
    </div>
  );
}
