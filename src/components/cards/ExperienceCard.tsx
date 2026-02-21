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
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-md">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              {companyUrl && (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-sm font-medium text-gray-600">{company}</p>
            <p className="text-xs text-gray-500 mt-1">{period}</p>
          </div>
          <div className="text-gray-400">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {expanded && (
        <div className="px-6 py-5 border-t border-gray-200 bg-gray-50 space-y-4">
          <p className="text-gray-700">{description}</p>

          {achievements.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex gap-3">
                    <span className="text-gray-400 mt-0.5">•</span>
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
