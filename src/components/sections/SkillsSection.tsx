import { Section } from '../layout/Section';
import { SkillCard } from '../cards/SkillCard';
import { Skill } from '../../types';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills" className="bg-gradient-to-r from-green-50 to-transparent">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-green to-accent-teal bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-700 mt-4 font-medium">
            A comprehensive set of <span className="text-accent-orange">product management</span> and <span className="text-accent-purple">technical competencies</span>
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
