"use client"

import AgeCounter from "./counter";
import SkillCard from "./skill";
import { Mail, Twitter, Linkedin, Github , MapPin} from "lucide-react";
import { Code2, Database, Palette, Users } from "lucide-react";

export default function Body() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      
      <h1 className="text-4xl md:text-3.3xl font-bold tracking-wide text-center">
        Abhishek Varma
      </h1>

      <div className="flex items-center justify-center gap-2 text-gray-400 mt-3 text-sm">
  <MapPin size={16} />
  <span>Pune, India</span>
</div>

      <div className="text-gray-500 text-sm mt-3">
        <AgeCounter/>
      </div>

      <p className="text-gray-300 mt-6 text-center max-w-xl">
        Full Stack Developer | Building scalable & modern web apps
      </p>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
            <Mail size={18} />
            Email
        </button>

        <button className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition">
            <Twitter size={18} />
            Twitter
        </button>

        <button className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition">
            <Linkedin size={18} />
            LinkedIn
        </button>

        <button className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition">
            <Github size={18} />
            GitHub
        </button>

        </div>

      <div className="mt-8 w-full max-w-md mx-auto border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-4 text-center text-gray-300">
        <p className="text-sm">Contact: abhishek.varma@adypu.edu.in</p>
        <p className="mt-2 text-sm text-gray-400">
          <span>•Twitter: @Abhishe66840508</span>
          <br/>
          <span>•LinkedIn: https://www.linkedin.com/in/abhishek-varma-72bb34325/</span>
          <br/>
          <span>• GitHub: https://github.com/it-is-Abhishek</span>
        </p>
      </div>

      <div className="mt-10 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500"/>
          About
        </div>

        <h2 className="text-2xl p-2 font-semibold mb-4">
          About Me
        </h2>

        <p className="text-sm text-gray-400 leading-relaxed">
          Motivated Computer Science student passionate about full-stack development,
          Web3, and building scalable applications.
        </p>
      </div>


      <section className="py-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Education
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-white">
          Education
        </h2>

        <div className="mt-10 max-w-2xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <h3 className="text-xl font-semibold text-white">
            B.Tech in Computer Science Engineering
          </h3>

          <p className="mt-0 text-s text-gray-400">
            Ajeenkya DY Patil College, Pune
          </p>

          <p className="mt-0 text-s text-gray-400">
            Expected Graduation: 2029
          </p>
        </div>
      </section>


      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        Skills
      </div>

      <h2 className="mt-2 text-2xl font-semibold text-white">
        Skills i have
      </h2>


    <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <SkillCard
  title="Languages & Frameworks"
  icon={Code2}
  skills={["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "React", "Next.js", "Rust", "Solidity"]}
/>

<SkillCard
  title="Databases & Tools"
  icon={Database}
  skills={["MongoDB", "PostgreSQL", "Prisma", "Git", "GitHub", "Postman", "VSCode", "Figma"]}
/>

<SkillCard
  title="UI & Styling"
  icon={Palette}
  skills={["Tailwind CSS"]}
/>

<SkillCard
  title="Other Skills"
  icon={Users}
  skills={["Public speaking", "Problem-solving", "Teamwork"]}
/>
  </div>









    </main>

  );
}
