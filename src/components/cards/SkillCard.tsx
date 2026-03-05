interface SkillCardProps {
  category: string;
  skills: string[];
}

const colorMap: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: 'bg-blue-50', text: 'text-accent-blue', border: 'border-accent-blue' },
  1: { bg: 'bg-green-50', text: 'text-accent-green', border: 'border-accent-green' },
  2: { bg: 'bg-purple-50', text: 'text-accent-purple', border: 'border-accent-purple' },
  3: { bg: 'bg-red-50', text: 'text-accent-red', border: 'border-accent-red' },
  4: { bg: 'bg-orange-50', text: 'text-accent-orange', border: 'border-accent-orange' },
};

export function SkillCard({ category, skills }: SkillCardProps) {
  const colorIndex = category.charCodeAt(0) % 5;
  const colors = colorMap[colorIndex];

  return (
    <div className={`border-2 ${colors.border} rounded-lg p-6 hover:shadow-xl transition-all duration-300 ${colors.bg}`}>
      <h3 className={`text-lg font-bold ${colors.text} mb-4`}>{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => {
          const skillColorIndex = (colorIndex + idx) % 5;
          const skillColors = colorMap[skillColorIndex];
          return (
            <span
              key={skill}
              className={`px-4 py-2 bg-white border-2 ${skillColors.border} ${skillColors.text} text-sm font-semibold rounded-full hover:shadow-md transition-all duration-300 hover:scale-105`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}
