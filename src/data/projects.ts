export const projects = [
  {
    title: "Backend Risk & Alert Management API",
    summary:
      "A secure backend system for managing risk records, alerts, and evidence tracking with asynchronous workflows and relational data handling.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Docker", "JWT"],
    highlights: [
      "Built asynchronous REST APIs for risk and alert operations.",
      "Implemented JWT-based authentication and secure access control.",
      "Used Redis for background task handling and PostgreSQL for relational schemas.",
      "Containerized the backend with Docker for consistent deployment.",
    ],
  },
  {
    title: "Traffic Simulator",
    summary:
      "A concurrency-focused simulation of intersection traffic flow designed to prevent deadlocks and coordinate safe vehicle movement.",
    stack: ["C++", "Threads", "Semaphores", "Mutexes", "OS Concepts"],
    highlights: [
      "Simulated concurrent vehicle movement across shared intersections.",
      "Applied semaphore and mutex synchronization to avoid deadlocks.",
      "Modeled thread coordination using operating system concurrency principles.",
      "Focused on correctness, synchronization, and safe shared resource access.",
    ],
  },
];