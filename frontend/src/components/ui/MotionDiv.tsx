import { motion } from "framer-motion";

export default function MotionDiv({
  children,
  variants,
  className
}: any) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}