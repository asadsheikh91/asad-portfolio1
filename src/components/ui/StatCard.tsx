type StatCardProps = {
  value: string;
  label: string;
  valueClassName?: string;
  className?: string;
};

export default function StatCard({
  value,
  label,
  valueClassName = "",
  className = "",
}: StatCardProps) {
  return (
    <div className={`rounded-xl border border-white/10 p-4 text-center backdrop-blur-sm ${className}`}>
      <div className={`bg-clip-text text-2xl font-bold text-transparent ${valueClassName}`}>
        {value}
      </div>
      <div className="mt-1 text-xs text-gray-400">{label}</div>
    </div>
  );
}