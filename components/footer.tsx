import { Github, Linkedin } from "lucide-react";
import { XIcon } from "@/components/ui/x-icon";

export function Footer() {
  return (
    <footer className="w-full py-10 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 font-bold text-xl text-neutral-900">
            <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center text-white">
              F
            </div>
            <span>Form Filler</span>
          </div>
          <p className="text-sm text-neutral-500">
            Built for students, by students. Crush your placement season.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/abhinavpatra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com/PatraBuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <XIcon className="w-5 h-5" />
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a
            href="https://linkedin.com/in/abhinavpatra1st"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} Form Filler. All rights reserved.
      </div>
    </footer>
  );
}
