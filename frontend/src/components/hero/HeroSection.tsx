import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Animated Glow Background */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.3em] text-cyan-400 mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >
          BUILDING
          <br />
          DIGITAL
          <br />
          EXPERIENCES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg"
        >
          Building modern full-stack applications using React,
          NestJS, PostgreSQL, Docker, and cloud technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mt-10"
        >
          <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-semibold">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}