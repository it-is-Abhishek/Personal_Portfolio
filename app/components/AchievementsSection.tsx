import AchievementCard from "./AchievementCard";

const achievements = [
  {
    title: "Stellar Buildathon Winner",
    description:
      'Built "EscrowX" — a decentralized freelance marketplace on the Stellar blockchain.',
    tag: "🏆 Winner",
    tagColor: "bg-yellow-500/20 text-yellow-400",
    date: "October 2025",
  },
  {
    title: "Smart India Hackathon (Internal Round Qualifier)",
    description:
      "Built Farm-Stack, a blockchain-enabled decentralized supply chain platform ensuring transparency.",
    tag: "🎯 Qualifier",
    tagColor: "bg-blue-500/20 text-blue-400",
    date: "2025",
  },
  {
    title: "Blockchain Developer Fellowship",
    description:
      "Completed 8-week training under industry mentors focusing on Solana and Rust.",
    tag: "🎓 Fellowship",
    tagColor: "bg-purple-500/20 text-purple-400",
    date: "2024",
  },
  {
    title: "College Innovation Challenge Winner",
    description:
      "Built a real-time chat application using WebSocket and Next.js.",
    tag: "🥇 Winner",
    tagColor: "bg-green-500/20 text-green-400",
    date: "2023",
  },
];

export default function AchievementsSection() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-black text-white">
      
      <div className="mb-4">
        <span className="px-4 py-1 text-sm bg-white/10 rounded-full border border-white/20 text-gray-300">
          ● Achievements
        </span>
      </div>

      <h2 className="text-4xl font-semibold mb-12">
        Recognition & Awards
      </h2>

      <div className="w-full max-w-3xl space-y-6">
        {achievements.map((item, index) => (
          <AchievementCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
