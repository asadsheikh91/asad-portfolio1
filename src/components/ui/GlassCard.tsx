type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div className={`rounded-2xl border border-white/10 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}