type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-24 text-white lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}