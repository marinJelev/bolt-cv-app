interface EducationCardProps {
  degree: string;
  field?: string;
  school: string;
  year?: string;
}

export function EducationCard({ degree, field, school, year }: EducationCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-900">{degree}</h3>
      {field && (
        <p className="text-sm font-medium text-gray-600 mt-2">{field}</p>
      )}
      <p className="text-sm text-gray-600 mt-2">{school}</p>
      {year && (
        <p className="text-xs text-gray-500 mt-3">{year}</p>
      )}
    </div>
  );
}
