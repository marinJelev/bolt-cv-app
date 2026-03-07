import { Section } from '../layout/Section';
import { SkillCard } from '../cards/SkillCard';
import { Skill } from '../../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills" className="bg-white">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-accent-dark">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-700 mt-4 font-medium">
            A comprehensive set of <span className="text-accent-dark font-bold">product management</span> and <span className="text-gray-600 font-bold">technical competencies</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <SkillCard
              key={skillGroup.id}
              category={skillGroup.category}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
