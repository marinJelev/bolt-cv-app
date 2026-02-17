import { Education as EducationType } from '../types';

interface EducationProps {
  educationData: EducationType[];
  isDarkMode: boolean;
}

export function Education({ educationData, isDarkMode }: EducationProps) {
  return (
    <section id="education" className="space-y-8">
      <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Education
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`p-6 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}
          >
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {edu.degree}
            </h3>
            <p className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {edu.field}
            </p>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {edu.school}
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Graduated {edu.graduationYear}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
