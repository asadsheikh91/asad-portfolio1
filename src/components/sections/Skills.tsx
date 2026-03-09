export default function Skills() {
  const skills = [
    "Python",
    "FastAPI",
    "REST API Design",
    "PostgreSQL",
    "Redis",
    "SQLAlchemy",
    "JWT Authentication",
    "Async Programming",
    "Docker",
    "CI/CD",
    "Linux CLI",
    "System Design",
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-black px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Skills</h2>

        <p className="mb-10 max-w-3xl leading-7 text-gray-300">
          My technical skill set focuses on backend engineering, API
          development, database systems, and deployment practices for
          scalable and maintainable applications.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <p className="font-medium text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}