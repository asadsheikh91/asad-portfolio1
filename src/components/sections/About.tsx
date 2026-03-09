export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-black px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">About Me</h2>

        <p className="max-w-3xl leading-7 text-gray-300">
          I am a backend developer focused on building secure, maintainable,
          and high-performance systems. My experience includes designing
          asynchronous APIs, optimizing relational databases, and developing
          production-ready backend solutions that support real operational
          environments.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-lg">Backend Development</h3>
            <p className="mt-2 text-sm text-gray-400">
              Building production-ready APIs using Python and FastAPI with
              authentication systems and clean architecture practices.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-lg">Database Engineering</h3>
            <p className="mt-2 text-sm text-gray-400">
              Designing relational data models, optimizing SQL queries,
              and improving reliability with PostgreSQL and Redis.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <h3 className="font-semibold text-lg">System Reliability</h3>
            <p className="mt-2 text-sm text-gray-400">
              Supporting deployment validation, logging configuration,
              and backend performance optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}