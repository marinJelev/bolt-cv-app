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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            A comprehensive set of product management and technical competencies
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
