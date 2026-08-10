// Static terminal pane. No animation, no fetch — renders complete on first paint.
//
// Everything below is a real capture from https://api.parchivisa.app/health taken on
// 10 Aug 2026. The latency figures are the median of eighteen runs from Islamabad, not the
// fastest — re-measure with:
//   for i in $(seq 18); do curl -so /dev/null \
//     -w 'connect %{time_connect}s · total %{time_total}s\n' \
//     https://api.parchivisa.app/health; done
// If you refresh the capture, update the `captured` line underneath to match.

const label =
  "Terminal output showing a health check against api.parchivisa.app returning status ok " +
  "and database ok, followed by a latency measurement of 0.068 seconds to connect and " +
  "0.365 seconds in total.";

const dim = "text-muted/60";
const punct = "text-muted";
const key = "text-accent";
const value = "text-ink";

function Prompt() {
  return <span className={dim}>asad@mbp ~ $ </span>;
}

export default function TerminalPane() {
  return (
    <div className="w-full max-w-[480px]">
      <div className="rounded-xl border border-accent/25 bg-surface px-5 py-6 overflow-x-auto">
        <pre
          role="img"
          aria-label={label}
          className="font-mono"
          style={{
            whiteSpace: "pre",
            fontSize: "clamp(0.58rem, 1.55vw, 0.8rem)",
            lineHeight: 1.725,
          }}
        >
          <Prompt />
          <span className={value}>API=https://api.parchivisa.app</span>
          {"\n\n"}

          <Prompt />
          <span className={value}>curl -s $API/health | jq</span>
          {"\n\n"}
          <span className={punct}>{"{"}</span>
          {"\n"}
          {"  "}
          <span className={key}>&quot;status&quot;</span>
          <span className={punct}>:</span>
          {"   "}
          <span className={value}>&quot;ok&quot;</span>
          <span className={punct}>,</span>
          {"\n"}
          {"  "}
          <span className={key}>&quot;database&quot;</span>
          <span className={punct}>:</span>{" "}
          <span className={value}>&quot;ok&quot;</span>
          {"\n"}
          <span className={punct}>{"}"}</span>
          {"\n\n"}

          <Prompt />
          <span className={value}>curl -so /dev/null \</span>
          {"\n"}
          <span className={value}>{'  -w "connect %{time_connect}s · \\'}</span>
          {"\n"}
          <span className={value}>{'total %{time_total}s\\n" $API/health'}</span>
          {"\n\n"}
          <span className={key}>connect</span>{" "}
          <span className={value}>0.068s</span>
          <span className={punct}> · </span>
          <span className={key}>total</span>{" "}
          <span className={value}>0.365s</span>
          {"\n\n"}

          <Prompt />
          <span className={punct}>_</span>
        </pre>
      </div>

      <div
        className="mt-4 flex flex-col gap-1 font-mono text-muted"
        style={{ fontSize: "clamp(0.6rem, 1.4vw, 0.7rem)" }}
      >
        <span>DigitalOcean · Cloudflare · FastAPI · PostgreSQL · Redis</span>
        <span>Sole engineer · live since 2025</span>
        <span className="opacity-60">captured 10 Aug 2026</span>
      </div>
    </div>
  );
}
