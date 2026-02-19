import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { WorkExperience } from '../types';

interface TimelineProps {
  experiences: WorkExperience[];
  isDarkMode: boolean;
  highlightedSkills?: string[];
}

export function Timeline({ experiences, isDarkMode, highlightedSkills = [] }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

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
    <section id="experience" className={`py-24 transition-colors ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div>
          <h2 className={`text-4xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Work Experience
          </h2>
          <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            8+ years driving product strategy and innovation
          </p>
        </div>

        <div className="space-y-3">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-lg border transition-all cursor-pointer ${
                expandedId === exp.id
                  ? isDarkMode
                    ? 'bg-gray-800 border-gray-700 shadow-lg'
                    : 'bg-white border-gray-200 shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-gray-600'
                    : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div
                onClick={() => toggleExpanded(exp.id)}
                className="p-6 flex items-start justify-between gap-4 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`text-lg font-semibold transition-colors ${isDarkMode ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-700'}`}>
                      {exp.position}
                    </h3>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`transition-colors ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.company}
                  </p>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {exp.startDate} — {exp.endDate}
                  </p>
                </div>

                <button className={`mt-1 p-2 rounded transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  {expandedId === exp.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {expandedId === exp.id && (
                <div className={`px-6 pb-6 border-t space-y-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>

                  <div>
                    <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Key Achievements
                    </h4>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3">
                          <span className={`mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.technologies.length > 0 && (
                    <div>
                      <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                        Skills & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              highlightedSkills.some((skill) =>
                                tech.toLowerCase().includes(skill.toLowerCase()) || skill.toLowerCase().includes(tech.toLowerCase())
                              )
                                ? isDarkMode
                                  ? 'bg-white text-gray-900'
                                  : 'bg-gray-900 text-white'
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
                  )}
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
      </div>
    </section>
  );
}
