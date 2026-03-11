import Reveal from "@/components/ui/Reveal";

export default function Services() {
  const services = [
    {
      title: "Backend API Development",
      description:
        "Building secure and scalable backend APIs using FastAPI and Python with clean architecture and production-ready design.",
      benefit:
        "Helps businesses create reliable applications and maintain clear communication between frontend and backend systems.",
    },
    {
      title: "Database Design & Optimization",
      description:
        "Designing relational database models and optimizing SQL queries using PostgreSQL and SQLAlchemy.",
      benefit:
        "Improves performance, data consistency, and system reliability for business applications.",
    },
    {
      title: "Backend Deployment Support",
      description:
        "Supporting backend deployment workflows using Docker, environment configuration, and logging practices.",
      benefit:
        "Ensures stable and reliable backend systems across development and production environments.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-24 bg-neutral-950 px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <>
            <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Services</h2>

            <p className="mb-12 max-w-3xl leading-7 text-gray-300">
              I provide backend-focused technical services that help businesses
              build reliable APIs, optimize data systems, and deploy scalable
              applications.
            </p>
          </>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm leading-6 text-gray-300">
                  {service.description}
                </p>

                <p className="text-sm leading-6 text-cyan-300">
                  {service.benefit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}