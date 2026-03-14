import GlassCard from "@/components/ui/GlassCard";

export default function CodePreviewCard() {
  return (
    <div className="hidden lg:flex lg:items-center lg:justify-center">
      <GlassCard className="relative aspect-square w-full max-w-md rounded-3xl p-8 backdrop-blur-xl transition-all duration-500">
        <div className="absolute -right-6 -top-6 h-24 w-24 animate-pulse rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-80 shadow-lg" />

        <div
          className="absolute -bottom-6 -left-6 h-32 w-32 animate-pulse rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 opacity-80 shadow-lg"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative z-10 rounded-2xl border border-white/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="space-y-3 font-mono text-sm">
            <div className="text-gray-400">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">developer</span>{" "}
              <span className="text-gray-500">=</span>{" "}
              <span className="text-gray-500">{"{"}</span>
            </div>

            <div className="pl-4 text-gray-400">
              <span className="text-green-400">name</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-orange-400">&quot;Asad Amad Sheikh&quot;</span>,
            </div>

            <div className="pl-4 text-gray-400">
              <span className="text-green-400">skills</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-gray-500">[</span>
              <span className="text-orange-400">&quot;FastAPI&quot;</span>
              <span className="text-gray-500">, </span>
              <span className="text-orange-400">&quot;PostgreSQL&quot;</span>
              <span className="text-gray-500">, </span>
              <span className="text-orange-400">&quot;Redis&quot;</span>
              <span className="text-gray-500">]</span>,
            </div>

            <div className="pl-4 text-gray-400">
              <span className="text-green-400">focus</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-orange-400">
                &quot;Scalable Backend Systems&quot;
              </span>
            </div>

            <div className="text-gray-500">{"}"}</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}