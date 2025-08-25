'use client'
import React, { useMemo } from 'react'
import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'

type Node = { id: string; label: string; x?: number; y?: number }
type Edge = { from: string; to: string }

export default function SkillTree({ nodes = [], edges = [] }: { nodes: Node[]; edges: Edge[] }) {
  const fitViewOptions = { padding: 0.2 }
  const rfNodes = useMemo(
    () => nodes.map((n, i) => ({
      id: n.id,
      data: { label: n.label },
      position: { x: n.x ?? i*120, y: n.y ?? (i%5)*90 },
      style: { borderRadius: 12, padding: 8 }
    })), [nodes]
  )
  const rfEdges = useMemo(
    () => edges.map((e) => ({
      id: `${e.from}-${e.to}`,
      source: e.from,
      target: e.to,
      animated: true
    })), [edges]
  )

  return (
    <div style={{ width: '100%', height: 520 }} className="rounded-2xl border">
      <ReactFlow nodes={rfNodes} edges={rfEdges} fitView fitViewOptions={fitViewOptions}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}
