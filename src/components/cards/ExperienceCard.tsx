import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  companyUrl?: string;
  defaultExpanded?: boolean;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  companyUrl,
  defaultExpanded = false,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-xl hover:border-accent-blue">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-5 text-left hover:bg-blue-50 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              {companyUrl && (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-accent-blue hover:text-accent-teal transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-sm font-semibold text-accent-green">{company}</p>
            <p className="text-xs text-gray-600 mt-1 font-medium">{period}</p>
          </div>
          <div className="text-accent-blue">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-6 py-5 border-t-2 border-accent-blue bg-blue-50 space-y-4">
          <p className="text-gray-800 font-medium">{description}</p>

          {achievements.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-accent-blue mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex gap-3">
                    <span className="text-accent-orange font-bold mt-0.5">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
