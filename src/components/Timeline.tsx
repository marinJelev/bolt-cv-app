import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { WorkExperience } from '../types';

interface TimelineProps {
  experiences: WorkExperience[];
  isDarkMode: boolean;
  highlightedSkills?: string[];
}

export function Timeline({ experiences, isDarkMode, highlightedSkills = [] }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const hasHighlightedSkill = (experience: WorkExperience) => {
    if (highlightedSkills.length === 0) return true;
    return experience.technologies.some((tech) =>
      highlightedSkills.some((skill) => tech.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(tech.toLowerCase()))
    );
  };

  const filteredExperiences = experiences.filter(hasHighlightedSkill);

  return (
    <section id="experience" className="space-y-8">
      <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Work Experience
      </h2>

      <div className="space-y-4">
        {filteredExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`rounded-lg border transition-all cursor-pointer ${
              expandedId === exp.id
                ? isDarkMode
                  ? 'bg-gray-800 border-blue-500 shadow-lg'
                  : 'bg-blue-50 border-blue-300 shadow-lg'
                : isDarkMode
                  ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                  : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div
              onClick={() => toggleExpanded(exp.id)}
              className="p-6 flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.position}
                    </h3>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`transition-colors ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.company}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {exp.startDate} — {exp.endDate}
                </p>
              </div>

              <button className={`mt-1 p-2 rounded transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>

            {expandedId === exp.id && (
              <div className={`px-6 pb-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Key Achievements
                  </h4>
                  <ul className={`space-y-1 ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="list-disc">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                          highlightedSkills.some((skill) =>
                            tech.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(tech.toLowerCase())
                          )
                            ? isDarkMode
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-500 text-white'
                            : isDarkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredExperiences.length === 0 && (
        <p className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          No experiences match the selected skills
        </p>
      )}
    </section>
  );
}
