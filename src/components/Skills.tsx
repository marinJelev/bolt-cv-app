import { X } from 'lucide-react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
  isDarkMode: boolean;
  selectedSkills: string[];
  onSkillToggle: (skill: string) => void;
}

export function Skills({ skills, isDarkMode, selectedSkills, onSkillToggle }: SkillsProps) {
  const allSkillsList = skills.flatMap((category) => category.skills);

  return (
    <section id="skills" className="space-y-8">
      <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Skills & Expertise
      </h2>

      <div>
        <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          Filter by skill:
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {allSkillsList.map((skill) => (
            <button
              key={skill}
              onClick={() => onSkillToggle(skill)}
              className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                selectedSkills.includes(skill)
                  ? isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-500 text-white'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {skill}
              {selectedSkills.includes(skill) && <X size={16} />}
            </button>
          ))}
        </div>

        {selectedSkills.length > 0 && (
          <button
            onClick={() => selectedSkills.forEach((skill) => onSkillToggle(skill))}
            className={`text-sm font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-600'}`}
          >
            Clear all filters
          </button>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((category) => (
          <div
            key={category.id}
            className={`p-6 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
          >
            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    selectedSkills.includes(skill)
                      ? isDarkMode
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => onSkillToggle(skill)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
