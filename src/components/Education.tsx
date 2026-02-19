import { Education as EducationType } from '../types';

interface EducationProps {
  educationData: EducationType[];
  isDarkMode: boolean;
}

export function Education({ educationData, isDarkMode }: EducationProps) {
  return (
    <section id="education" className={`py-24 transition-colors ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div>
          <h2 className={`text-4xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className={`p-6 rounded-lg border transition-all hover:shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}
            >
              <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {edu.degree}
              </h3>
              {edu.field && (
                <p className={`font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.field}
                </p>
              )}
              <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {edu.school}
              </p>
              {edu.graduationYear && (
                <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {edu.graduationYear}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
