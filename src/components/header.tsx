import React from "react";
import { ExternalLink, Music4 } from "lucide-react";

export default function Header() {
  return (
    <header className="z-layout fixed w-full h-16">
      <div className="bg-background max-w-[40rem] h-full px-4 flex justify-between items-center my-0 mx-auto">
        <div className="flex">
          <a href="/" className="flex items-center gap-1 mr-6">
            <span className="font-bold text-lg">Minseok Seo</span>
            <Music4 className="w-[1.2rem] h-[1.2rem]" />
          </a>
          <ul className="flex items-center gap-6">
            <li>
              <a
                target="_blank"
                // href={PROJECTS_URL}
                className="text-sm font-light flex items-center gap-0.5 translate-y-px"
              >
                <span>Projects</span>
                <ExternalLink className="w-[0.75rem] h-[0.75rem]" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">{/* <ModeToggle /> */}</div>
      </div>
    </header>
  );
}
