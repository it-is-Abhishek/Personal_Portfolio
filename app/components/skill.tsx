"use client"

export default function SkillCard({ title, skills, icon: Icon }) {
  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:bg-white/10">
      
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-1 text-sm rounded-full bg-white/10 text-gray-300 border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}