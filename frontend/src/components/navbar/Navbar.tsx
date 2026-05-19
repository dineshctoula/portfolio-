import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-2xl font-black tracking-widest">
          DINESH
        </h1>

        <div className="hidden md:flex items-center gap-8 uppercase text-sm tracking-wider">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}