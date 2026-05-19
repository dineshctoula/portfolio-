import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern full-stack portfolio with animations",
    tech: ["React", "NestJS", "PostgreSQL"],
  },
  {
    title: "Login System",
    desc: "JWT authentication system with NestJS",
    tech: ["NestJS", "JWT", "Prisma"],
  },
  {
    title: "E-commerce UI",
    desc: "Frontend UI for shopping platform",
    tech: ["React", "Tailwind"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}