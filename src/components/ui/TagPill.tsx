type TagPillProps = {
  label: string;
  dotColor?: string;
  className?: string;
};

export default function TagPill({
  label,
  dotColor = "bg-cyan-400",
  className = "",
}: TagPillProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${className}`}
    >
      <span className={`h-3 w-3 rounded-full ${dotColor}`} />
      <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
  );
}