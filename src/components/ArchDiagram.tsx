"use client";

import {
  useRef,
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion, useInView } from "framer-motion";
import {
  ReactFlow,
  Handle,
  Position,
  getBezierPath,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// ─── Context ────────────────────────────────────────────────────────────────

interface DiagramCtx {
  inView: boolean;
  useStaggerDelay: boolean;
  edgesVisible: boolean;
  hoveredNodeId: string | null;
  setHoveredNodeId: (id: string | null) => void;
}

const DiagramContext = createContext<DiagramCtx>({
  inView: false,
  useStaggerDelay: true,
  edgesVisible: false,
  hoveredNodeId: null,
  setHoveredNodeId: () => {},
});

// ─── Static data ────────────────────────────────────────────────────────────
// Defined before GlowNode so the component can reference rawEdges directly.

const rawEdges: Edge[] = [
  { id: "e-client-fastapi",   source: "client",  target: "fastapi"  },
  { id: "e-iot-fastapi",      source: "iot",     target: "fastapi"  },
  { id: "e-fastapi-auth",     source: "fastapi", target: "auth"     },
  { id: "e-fastapi-redis",    source: "fastapi", target: "redis"    },
  { id: "e-auth-postgres",    source: "auth",    target: "postgres" },
  { id: "e-redis-workers",    source: "redis",   target: "workers"  },
  { id: "e-workers-llm",      source: "workers", target: "llm"      },
  { id: "e-workers-postgres", source: "workers", target: "postgres" },
];

const rawNodes: Node[] = [
  { id: "client",   position: { x: 80,  y: 0   }, data: { label: "Client Request",            delayIndex: 0 } },
  { id: "iot",      position: { x: 400, y: 0   }, data: { label: "IoT Sensors",                delayIndex: 1 } },
  { id: "fastapi",  position: { x: 200, y: 130 }, data: { label: "FastAPI Server",             delayIndex: 2 } },
  { id: "auth",     position: { x: 40,  y: 280 }, data: { label: "Auth Layer — JWT/RBAC",      delayIndex: 3 } },
  { id: "redis",    position: { x: 380, y: 280 }, data: { label: "Redis Cache",                delayIndex: 4 } },
  { id: "postgres", position: { x: 40,  y: 420 }, data: { label: "PostgreSQL",                 delayIndex: 5 } },
  { id: "workers",  position: { x: 200, y: 420 }, data: { label: "Background Workers",         delayIndex: 6 } },
  { id: "llm",      position: { x: 360, y: 420 }, data: { label: "LLM Layer — Claude/Gemini",  delayIndex: 7 } },
];

// ─── GlowNode ────────────────────────────────────────────────────────────────

function GlowNode({ id, data }: NodeProps) {
  const { inView, useStaggerDelay, hoveredNodeId, setHoveredNodeId } =
    useContext(DiagramContext);

  const delayIndex = (data.delayIndex as number) ?? 0;
  const isFastapi  = id === "fastapi";

  const isHovered   = hoveredNodeId === id;
  const isConnected =
    hoveredNodeId !== null &&
    !isHovered &&
    rawEdges.some(
      (e) =>
        (e.source === hoveredNodeId && e.target === id) ||
        (e.target === hoveredNodeId && e.source === id)
    );
  const isDimmed = hoveredNodeId !== null && !isHovered && !isConnected;

  // Scroll-in animation values
  const scrollDelay  = useStaggerDelay ? delayIndex * 0.15 : 0;
  const targetOpacity = !inView ? 0 : isDimmed ? 0.25 : 1;
  const targetScale   = !inView ? 0.8 : isHovered ? 1.05 : 1;

  // Box-shadow: hover/connected overrides suppress the CSS pulse
  const baseGlow = isFastapi
    ? "0 0 16px rgba(79,248,229,0.5), inset 0 0 8px rgba(79,248,229,0.05)"
    : "0 0 8px rgba(79,248,229,0.3), inset 0 0 8px rgba(79,248,229,0.05)";

  const overrideGlow = isHovered
    ? "0 0 30px rgba(79,248,229,0.9)"
    : isConnected
    ? "0 0 20px rgba(79,248,229,0.6)"
    : null;

  // Pause the pulse when hover state is active on any node
  const pulseAnim = hoveredNodeId ? "none" : isFastapi ? "nodePulseCore" : "nodePulse";

  const nodeStyle: CSSProperties = {
    background: "#0D1425",
    border: `1.5px solid ${isHovered ? "#ffffff" : "#4FF8E5"}`,
    borderRadius: "8px",
    padding: isFastapi ? "14px 24px" : "12px 20px",
    fontFamily: "monospace",
    fontSize: isFastapi ? "15px" : "13px",
    fontWeight: isFastapi ? 600 : 400,
    color: "white",
    textAlign: "center",
    whiteSpace: "nowrap",
    minWidth: isFastapi ? "180px" : "160px",
    boxShadow: overrideGlow ?? baseGlow,
    animationName: pulseAnim,
    animationDuration: isFastapi ? "1.8s" : "2.5s",
    animationDelay: `${delayIndex * 0.25}s`,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    transition: "border-color 200ms ease, box-shadow 200ms ease",
    cursor: "default",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: targetOpacity, scale: targetScale }}
      transition={{
        opacity: { duration: 0.35, delay: scrollDelay },
        scale: { duration: 0.2, ease: "easeOut" },
      }}
      style={nodeStyle}
      onMouseEnter={() => setHoveredNodeId(id)}
      onMouseLeave={() => setHoveredNodeId(null)}
    >
      <Handle type="target" position={Position.Top}    style={{ opacity: 0 }} />
      {isFastapi && (
        <div
          style={{
            fontSize: "10px",
            color: "#4FF8E5",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          CORE
        </div>
      )}
      {data.label as ReactNode}
      <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
    </motion.div>
  );
}

// ─── AnimatedGlowEdge ────────────────────────────────────────────────────────

function AnimatedGlowEdge({
  id,
  source,
  target,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const { hoveredNodeId, edgesVisible } = useContext(DiagramContext);

  const isConnected =
    hoveredNodeId !== null &&
    (hoveredNodeId === source || hoveredNodeId === target);
  const isDimmed = hoveredNodeId !== null && !isConnected;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const stroke      = isConnected ? "#ffffff" : "#4FF8E5";
  const strokeWidth = isConnected ? 2 : 1.5;
  const opacity     = !edgesVisible ? 0 : isDimmed ? 0.1 : 1;
  const glowAlpha   = isConnected ? "0.9" : "0.6";

  return (
    <path
      id={id}
      d={edgePath}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray="6 3"
      style={{
        opacity,
        animation: "dashFlow 1.2s linear infinite",
        filter: `drop-shadow(0 0 3px rgba(79,248,229,${glowAlpha}))`,
        transition:
          "opacity 0.4s ease, stroke 200ms ease, stroke-width 200ms ease",
      }}
    />
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function ArchDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView       = useInView(containerRef, { once: true });

  const [hoveredNodeId,   setHoveredNodeId]   = useState<string | null>(null);
  const [useStaggerDelay, setUseStaggerDelay] = useState(true);
  const [edgesVisible,    setEdgesVisible]    = useState(false);

  useEffect(() => {
    if (!inView) return;
    // Edges fade in after all 8 nodes have animated in
    const edgeTimer    = setTimeout(() => setEdgesVisible(true),    1200);
    // Clear per-node stagger delays once the entry animation is done
    const staggerTimer = setTimeout(() => setUseStaggerDelay(false), 1650);
    return () => {
      clearTimeout(edgeTimer);
      clearTimeout(staggerTimer);
    };
  }, [inView]);

  const nodeTypes = useMemo(() => ({ glow: GlowNode }), []);
  const edgeTypes = useMemo(() => ({ glowEdge: AnimatedGlowEdge }), []);

  const nodes = useMemo(
    () => rawNodes.map((n) => ({ ...n, type: "glow" })),
    []
  );

  const edges = useMemo(
    () => rawEdges.map((e) => ({ ...e, type: "glowEdge" })),
    []
  );

  const ctxValue = useMemo(
    () => ({ inView, useStaggerDelay, edgesVisible, hoveredNodeId, setHoveredNodeId }),
    [inView, useStaggerDelay, edgesVisible, hoveredNodeId]
  );

  return (
    <DiagramContext.Provider value={ctxValue}>
      {/* Inject keyframes — scoped to this component's lifecycle */}
      <style>{`
        @keyframes nodePulse {
          0%, 100% { box-shadow: 0 0 8px rgba(79,248,229,0.3), inset 0 0 8px rgba(79,248,229,0.05); }
          50%       { box-shadow: 0 0 20px rgba(79,248,229,0.7), inset 0 0 12px rgba(79,248,229,0.15); }
        }
        @keyframes nodePulseCore {
          0%, 100% { box-shadow: 0 0 16px rgba(79,248,229,0.5), inset 0 0 8px rgba(79,248,229,0.05); }
          50%       { box-shadow: 0 0 32px rgba(79,248,229,0.85), inset 0 0 14px rgba(79,248,229,0.2); }
        }
        @keyframes dashFlow {
          from { stroke-dashoffset: 24; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "clamp(420px, 55vw, 620px)",
          overflow: "hidden",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          preventScrolling={false}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          proOptions={{ hideAttribution: true }}
          style={{ background: "transparent" }}
        />
      </div>
    </DiagramContext.Provider>
  );
}
