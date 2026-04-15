import { Fingerprint } from "lucide-react";
import mephoto from "../assets/me2.jpg";

export function Aboutme() {
  return (
    <div
      className="mt-52 w-screen flex flex-col justify-start items-center 
      scroll-mt-16 lg:scroll-mt-32"
      id="aboutme"
    >
      <h1>Sobre Mim</h1>
      <div className="mt-10 flex flex-col w-[85vw] sm:w-4/5 gap-10 lg:flex-row lg:gap-32"
      >
        <img
          src={mephoto}
          className="flex w-3/4 rounded-full self-center md:w-72 lg:w-80 lg:self-start 
          ease-in duration-300 group-hover:scale-105"
          alt="photo me"
        />

        <div className="text-justify leading-7 flex flex-col gap-3 lg:gap-2">
          <p>
            Olá, eu sou Gabriel Cavalcante, atualmente sou formado como Técnico
            em Desenvolvimento de Sistemas (DS) pela Etec Professor Basilides de
            Godoy.
          </p>
          <p>
            No meu dia a dia, desenvolvo projetos utilizando ReactJS e Tailwind.
            No entanto, estou sempre em busca de ampliar meus conhecimentos,
            explorando novos frameworks e tecnologias para evoluir
            constantemente. Busco oportunidades de estágio para meu
            desenvolvimento profissional, já que ainda não atuei formalmente na
            área.
          </p>
          <a
            href="./MoreAbout"
            className="bg-black/10 backdrop-blur-md text-center shadow-glass px-4 py-3 flex items-center 
            h-10 rounded-full text-xs cursor-pointer overflow-hidden duration-300 mt-2 w-14 gap-5 
            ease-in-out hover:w-32 hover:gap-2 group"
          >
            <i>
              <Fingerprint size="22" className="ease-in-out duration-200 group-hover:stroke-purple-600" />
            </i>
            <span className="flex items-center whitespace-nowrap ease duration-300 delay-75">
              Saiba mais
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
