import { Trophy, Calendar } from "lucide-react";

interface AchievementCardProps {
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  date: string;
}

export default function AchievementCard({
  title,
  description,
  tag,
  tagColor,
  date,
}: AchievementCardProps) {
  return (
    <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
      <div className="flex justify-between items-start">

        <div className="flex gap-4">
          <Trophy className="text-yellow-500 mt-1" size={22} />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>
        </div>

        <div className="text-right space-y-2">
          <span className={`px-3 py-1 text-sm rounded-full ${tagColor}`}>
            {tag}
          </span>

          <div className="flex items-center justify-end gap-2 text-gray-400 text-sm">
            <Calendar size={14} />
            {date}
          </div>
        </div>

      </div>
    </div>
  );
}
