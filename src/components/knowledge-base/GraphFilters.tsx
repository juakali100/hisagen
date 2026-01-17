'use client';

/**
 * GraphFilters Component
 * Phase 4, Task 13 - HISAGEN Knowledge Base
 * Phase C: Filter toggles for node types
 */

import { NodeType, NODE_COLORS, NODE_TYPE_LABELS } from '@/types/graph';

interface GraphFiltersProps {
  activeFilters: Set<NodeType>;
  onFilterChange: (type: NodeType) => void;
  nodeCounts: Record<NodeType, number>;
}

export default function GraphFilters({
  activeFilters,
  onFilterChange,
  nodeCounts,
}: GraphFiltersProps) {
  const nodeTypes: NodeType[] = [
    'organization',
    'person',
    'project',
    'evidence',
    'milestone',
    'program',
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {nodeTypes.map(type => {
        const isActive = activeFilters.has(type);
        const count = nodeCounts[type] || 0;

        return (
          <button
            key={type}
            onClick={() => onFilterChange(type)}
            className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
              transition-all duration-150 border
              ${isActive
                ? 'bg-white border-mist shadow-sm'
                : 'bg-transparent border-transparent opacity-50 hover:opacity-75'
              }
            `}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: isActive ? NODE_COLORS[type] : `${NODE_COLORS[type]}60`,
              }}
            />
            <span className={isActive ? 'text-secondary' : 'text-slate'}>
              {NODE_TYPE_LABELS[type]}
            </span>
            <span className={`text-[10px] ${isActive ? 'text-slate/60' : 'text-slate/40'}`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
