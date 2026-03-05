import { Section } from '../layout/Section';
import { EducationCard } from '../cards/EducationCard';
import { Education } from '../../types';

interface EducationSectionProps {
  educationData: Education[];
}

export function EducationSection({ educationData }: EducationSectionProps) {
  return (
    <Section id="education" className="bg-gradient-to-r from-purple-50 to-transparent">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-purple to-accent-red bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              degree={edu.degree}
              field={edu.field}
              school={edu.school}
              year={edu.graduationYear || undefined}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
