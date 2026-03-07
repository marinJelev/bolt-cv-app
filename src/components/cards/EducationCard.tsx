interface EducationCardProps {
  degree: string;
  field?: string;
  school: string;
  year?: string;
}

export function EducationCard({ degree, field, school, year }: EducationCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 hover:shadow-xl hover:border-accent-blue bg-white transition-all duration-300">
      <h3 className="text-lg font-bold text-accent-dark">{degree}</h3>
      {field && (
        <p className="text-sm font-semibold text-gray-600 mt-2">{field}</p>
      )}
      <p className="text-sm text-gray-700 font-medium mt-2">{school}</p>
      {year && (
        <p className="text-xs text-gray-500 font-semibold mt-3">{year}</p>
      )}
    </div>
  );
}
