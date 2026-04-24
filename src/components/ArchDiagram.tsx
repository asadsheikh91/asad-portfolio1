"use client";

import { ReactFlow, MarkerType, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type React from "react";

const nodeStyle: React.CSSProperties = {
  background: "#111827",
  border: "2px solid #4FF8E5",
  color: "#F0F4FF",
  fontFamily: "monospace",
  fontSize: "12px",
  borderRadius: "8px",
  padding: "10px 16px",
  textAlign: "center",
  minWidth: "160px",
};

const nodes: Node[] = [
  {
    id: "llm",
    position: { x: 90, y: 10 },
    data: {
      label: (
        <div>
          <div style={{ fontWeight: "700", color: "#F0F4FF" }}>LLM Layer</div>
          <div style={{ color: "#4FF8E5", fontSize: "11px", marginTop: "2px" }}>
            Claude · Gemini
          </div>
        </div>
      ),
    },
    style: nodeStyle,
  },
  {
    id: "fastapi",
    position: { x: 50, y: 140 },
    data: {
      label: (
        <div>
          <div style={{ fontWeight: "700", color: "#F0F4FF" }}>FastAPI Server</div>
          <div style={{ color: "#8892A4", fontSize: "11px", marginTop: "2px" }}>
            Async REST · RBAC · JWT
          </div>
        </div>
      ),
    },
    style: { ...nodeStyle, minWidth: "200px" },
  },
  {
    id: "postgres",
    position: { x: 0, y: 280 },
    data: {
      label: (
        <div>
          <div style={{ fontWeight: "700", color: "#F0F4FF" }}>PostgreSQL</div>
          <div style={{ color: "#8892A4", fontSize: "11px", marginTop: "2px" }}>
            Primary Store
          </div>
        </div>
      ),
    },
    style: nodeStyle,
  },
  {
    id: "redis",
    position: { x: 210, y: 280 },
    data: {
      label: (
        <div>
          <div style={{ fontWeight: "700", color: "#F0F4FF" }}>Redis</div>
          <div style={{ color: "#8892A4", fontSize: "11px", marginTop: "2px" }}>
            Cache · Queues
          </div>
        </div>
      ),
    },
    style: nodeStyle,
  },
];

const edges: Edge[] = [
  {
    id: "llm-fastapi",
    source: "llm",
    target: "fastapi",
    animated: true,
    style: { stroke: "#4FF8E5", strokeWidth: 2, strokeDasharray: "5,5" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#4FF8E5" },
  },
  {
    id: "fastapi-postgres",
    source: "fastapi",
    target: "postgres",
    animated: true,
    style: { stroke: "#4FF8E5", strokeWidth: 2, strokeDasharray: "5,5" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#4FF8E5" },
  },
  {
    id: "fastapi-redis",
    source: "fastapi",
    target: "redis",
    animated: true,
    style: { stroke: "#4FF8E5", strokeWidth: 2, strokeDasharray: "5,5" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#4FF8E5" },
  },
];

export default function ArchDiagram() {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      preventScrolling={false}
      fitView
      fitViewOptions={{ padding: 0.25 }}
      proOptions={{ hideAttribution: true }}
      style={{ background: "transparent" }}
    />
  );
}
