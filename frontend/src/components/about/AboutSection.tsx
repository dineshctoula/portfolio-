import MotionDiv from "../ui/MotionDiv";
import { fadeUp } from "../../animations/fadeUp";

export default function AboutSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <MotionDiv variants={fadeUp}>
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>
      </MotionDiv>

      <MotionDiv variants={fadeUp}>
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a full-stack developer who builds scalable web applications using modern technologies like React, NestJS, PostgreSQL, and Docker. I enjoy building clean UI systems and backend architectures.
        </p>
      </MotionDiv>

    </section>
  );
}