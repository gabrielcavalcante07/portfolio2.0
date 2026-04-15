import { Github, Linkedin, Mail } from "lucide-react";
import { ButtonGlass } from "./ButtonGlass";
import { Contact } from "./Contact";

export function Footer() {
  return (
    <footer
      className="w-screen backdrop-blur-md1 flex
      flex-col overflow-hidden pt-6 bg-neutral-900 z-0"
    >        
        <div className="flex justify-between px-6 sm:px-10">
          <div className="">
            <h1 className="text-lg sm:text-xl">Gabriel Cavalcante</h1>
            <h1 className="text-lg sm:text-xl">FullStack Developer</h1>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-semibold pb-2 ">Páginas</h2>
            <a className="font-normal opacity-60 ease-in-out duration-300 
            hover:opacity-100" href="#home"
            >
              Home
            </a>
            <a className="font-normal opacity-60 ease-in-out duration-300 
            hover:opacity-100" href="#aboutme"
            >
              Sobre mim
            </a>
            <a className="font-normal opacity-60 ease-in-out duration-300 
            hover:opacity-100" href="#projects"
            >
              Projetos
            </a>
          </div>
        </div>




        <div className="flex justify-start px-6 sm:justify-center gap-2 py-2 mt-6">
          <span className="font-medium">Techs utilizadas:</span>
          <div className="flex gap-1 items-center">
            <i className="devicon-react-original colored" />• 
            <i className="devicon-typescript-plain colored" />• 
            <i className="devicon-tailwindcss-original colored" />
          </div>
        </div>

        <div className="flex justify-evenly gap-3 pt-2 pb-20 sm:py-2 px-6 sm:px-10 border-t
        border-zinc-700 w-full">
          <div className="flex justify-center items-center">
            <span className="text-xs1 sm:text-base pr-4 sm:w-auto">
              © 2026 <a href="#" className="font-semibold">Gabriel Cavalcante. </a>
              Todos os direitos reservados.
            </span>
          </div>
          
          <div className="flex items-end justify-end gap-2">
            <a className="opacity-60 ease-in-out duration-300 hover:opacity-100" 
            href="https://github.com/gabrielcavalcante07"
            >
              <Github />
            </a>
            <a className="opacity-60 ease-in-out duration-300 hover:opacity-100 hover:text-blueIn" 
            href="https://linkedin.com/in/gabrielcsantoss"
            >
              <Linkedin />
            </a>
            <a className="opacity-60 ease-in-out duration-300 hover:opacity-100 hover:text-red-500" 
            href="mailto:contato.gcsantos@gmail.com"
            >
              <Mail />
            </a>
          </div>
        </div>

    </footer>
  );
}
