import { Section } from '../layout/Section';
import { ExperienceCard } from '../cards/ExperienceCard';
import { WorkExperience } from '../../types';

interface ExperienceSectionProps {
  experiences: WorkExperience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section id="experience" className="bg-gradient-to-r from-blue-50 to-transparent">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-gray-700 mt-4 font-medium">
            <span className="text-accent-blue">10+ years</span> of product leadership and <span className="text-accent-green">strategic development</span>
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
