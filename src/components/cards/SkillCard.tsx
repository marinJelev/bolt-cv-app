interface SkillCardProps {
  category: string;
  skills: string[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 hover:shadow-xl hover:border-accent-blue bg-white transition-all duration-300">
      <h3 className="text-lg font-bold text-accent-dark mb-4">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-50 border-2 border-accent-blue text-accent-blue text-sm font-semibold rounded-full hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
