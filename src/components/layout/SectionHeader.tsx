type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 text-gray-400 ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}