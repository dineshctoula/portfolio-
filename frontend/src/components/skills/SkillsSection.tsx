import MotionDiv from "../ui/MotionDiv";
import { fadeUp } from "../../animations/fadeUp";

const skills = [
  { name: "React", level: 90 },
  { name: "NestJS", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker", level: 75 },
  { name: "TypeScript", level: 88 }
];

export default function SkillsSection() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">

      <MotionDiv variants={fadeUp}>
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>
      </MotionDiv>

      <div className="space-y-6">
        {skills.map((skill, i) => (
          <MotionDiv key={i} variants={fadeUp}>
            <div>
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>

    </section>
  );
}