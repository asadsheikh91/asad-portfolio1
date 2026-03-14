type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:shadow-blue-500/40 ${className}`}
    >
      <span className="flex items-center justify-center gap-2">{children}</span>
    </a>
  );
}