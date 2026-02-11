"use client";

import Link from "next/link";
import { Sun } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/15 bg-black">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">

        <div className="ml-9 text-white text-lg font-semibold tracking-wide">
          Abhishek
        </div>


        <nav className="flex items-center gap-8 text-sm text-gray-300">
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-white transition">
            Experience
          </Link>
          <Link href="#achievements" className="hover:text-white transition">
            Achievements
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>

          <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition">
            <Sun size={16} />
          </button>
        </nav>
      </div>
    </header>
  );
}
