import { Section } from '../layout/Section';
import { ExperienceCard } from '../cards/ExperienceCard';
import { WorkExperience } from '../../types';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section className="bg-white">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            8+ years of product leadership and strategic development
          </p>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              title={exp.position}
              company={exp.company}
              period={`${exp.startDate} — ${exp.endDate}`}
              description={exp.description}
              achievements={exp.achievements}
              companyUrl={exp.companyUrl}
              defaultExpanded={idx === 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
