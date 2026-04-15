import { Contact } from "./Contact";
import { CodeXml, Fingerprint, Home } from "lucide-react";

export function Header() {
  return (
    <header
      className="w-screen flex fixed z-50 justify-center items-center 
      overflow-hidden"
    >
      <div className="flex w-full py-3 px-3 sm:px-5 justify-between sm:items-center h-20 sm:h-14  overflow-hidden">
        <a href="#" className="flex text-2xl bg-zinc-950/10 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-0 rounded-lg px-2 h-12 items-center">
          GC
        </a>
        <div className="hidden sm:flex">
          <Contact />
        </div>
      </div>

      <div className="bottom-1 sm:top-1 fixed h-14 px-5 py-3 rounded-full 
      bg-black/10 backdrop-blur-[7px] shadow-glass">
        <ul className="flex w-full h-full items-center justify-center gap-4 
        text-xs">
          <a
            className="flex gap-2 items-center opacity-75 hover:opacity-100 
            duration-300 font-semibold"
            href="#home"
          >
            <Home />
            <span className="hidden sm:flex">Home</span>
          </a>
          <a
            className="flex gap-2 items-center opacity-75 hover:opacity-100 
            duration-300 font-semibold"
            href="#aboutme"
          >
            <Fingerprint />
            <span className="hidden sm:flex">Sobre mim</span>
          </a>
          <a
            className="flex gap-2 items-center opacity-75 hover:opacity-100 
            duration-300 font-semibold"
            href="#projects"
          >
            <CodeXml />
            <span className="hidden sm:flex">Projetos</span>
          </a>
          <div className="flex sm:hidden">
            <Contact />
          </div>
        </ul>
      </div>
    </header>
  );
}