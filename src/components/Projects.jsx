import { Cards } from "./Cards";
import imgLinks from "../assets/projectLinks.png";
import imgShortly from "../assets/shortly.png"
import { useState } from "react";
import { Coffee, Link } from 'lucide-react';

export const Projects = () => {
  const [More, setMore] = useState(false);

  function HandleMoreProjects(event) {
    event.preventDefault();
    setMore(!More);
  };
  return (
    <div
      className="flex flex-col items-center w-screen scroll-m-20 mt-32 mb-60"
      id="projects"
    >
      <h1>Projetos</h1>
      <div className="w-[85vw] sm:w-4/5 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 lg:mt-20">
        <Cards
          img={imgLinks}
          title={
            <div className="flex gap-2 items-center">
              <Link size={20} /> Links
            </div>}
          firstContent="Plataforma de links estilo Linktree desenvolvida para centralizar e facilitar
          o acesso rápido ao meu portfólio, Linkedin, Github e Email em um único lugar. Construída com
          React e Tailwind CSS."
          ar="https://linksgc.netlify.app/"
          repo="https://github.com/gabrielcavalcante07/linkthree"
          techs={["react-plain colored", "javascript-plain colored","tailwindcss-plain colored"]}
        />
        <Cards
          img={imgShortly}
          title={
            <div className="flex gap-4 sm:gap-2 items-center">
              <Coffee size={20}/> <p className="text-xl">Em breve novos projetos...</p>
            </div>}
          firstContent="Estou começando a estudar Java, e em breve teremos novos projetos Full Stack por aqui."
          techs={["react-plain colored", "typescript-plain colored", "java-plain colored", 
          "spring-plain colored", "postgresql-plain colored"]}
          repo={"https://github.com/gabrielcavalcante07"}

        />
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 lg:col-span-2 gap-3 
              ${More ? "flex" : "hidden"}`}
        >
        </div>
      </div>
      {/* <a
        href=""
        onClick={HandleMoreProjects}
        className="bg-black/10 backdrop-blur-md text-center shadow-glass px-4 py-5 flex items-center 
        h-10 gap-2 rounded-full text-xs cursor-pointer overflow-hidden duration-300 mt-8"
      >
        {More ? (
          <>
            Menos Projetos
            <ArrowUpToLineIcon size="20" />
          </>
          ) : (
          <>
            Mais Projetos
            <ArrowDownToLine size="20" />
          </>
          )
        }
      </a> */}
    </div>
  );
};
