import React from "react";
import { Music4 } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { Link } from "gatsby";
import MobileMenu from "@/components/mobile-menu";

export default function Header() {
  return (
    <header className="z-layout fixed w-full h-16">
      <div className="bg-background max-w-[40rem] h-full px-4 flex justify-between items-center my-0 mx-auto">
        <div className="flex">
          <Link to="/" className="flex items-center gap-1 mr-6">
            <span className="font-bold text-lg">Minseok Log</span>
            <Music4 className="w-[1.2rem] h-[1.2rem]" />
          </Link>
          <ul className="hidden sm:flex items-center gap-6">
            <li>
              <Link
                to="/posts"
                className="text-sm font-light flex items-center gap-0.5 translate-y-px"
              >
                <span>Posts</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tags"
                className="text-sm font-light flex items-center gap-0.5 translate-y-px"
              >
                <span>Tags</span>
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="text-sm font-light flex items-center gap-0.5 translate-y-px"
              >
                <span>Search</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <MobileMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
