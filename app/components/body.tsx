"use client"

import AgeCounter from "./counter";
import { Mail, Twitter, Linkedin, Github , MapPin} from "lucide-react";


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

      <div className="text-gray-500 text-sm mt-1">
        <AgeCounter/>
      </div>

      <p className="text-gray-300 mt-6 text-center max-w-xl">
        Full Stack Developer | Building scalable & modern web apps
      </p>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <button className="flex items-center gap-2 px-5 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition">
            <Mail size={18} />
            Email
        </button>

        <button className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition">
            <Twitter size={18} />
            Twitter
        </button>

        <button className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition">
            <Linkedin size={18} />
            LinkedIn
        </button>

        <button className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition">
            <Github size={18} />
            GitHub
        </button>

        </div>

      <div className="mt-8 w-full max-w-2xl border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-6 text-center text-gray-300">
        <p>Contact: abhishek@email.com</p>
        <p className="mt-2 text-sm text-gray-400">
          Twitter • LinkedIn • GitHub
        </p>
      </div>

      <div className="mt-16 text-center max-w-2xl">
        <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm text-gray-300 mb-4">
          About
        </div>

        <h2 className="text-2xl font-semibold mb-4">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Motivated Computer Science student passionate about full-stack development,
          Web3, and building scalable applications.
        </p>
      </div>

    </main>
  );
}
