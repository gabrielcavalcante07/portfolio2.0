// .me{
//     margin-top: 5rem;
//     display: flex;
//     width: 85vw;
//     gap: 8rem;
// }

import mephoto from "../assets/me.png";

export function Aboutme() {
  return (
    <div
      className="mt-14 flex flex-col justify-center items-center"
      id="aboutme"
    >
      <h1 className="text-primary text-4xl font-semibold">About Me</h1>
      <div className="mt-20 flex w-4/5 gap-32">
          <img
            src={mephoto}
            className="w-80 rounded-full shadow-lg shadow-primary"
            alt="photo me"
          />

        <p className="text-justify leading-7">
          Olá, meu nome é Gabriel Cavalcante. Desde cedo, sempre tive interesse
          em tecnologia, seja criando designs ou editando fotos e vídeos. Quando
          conheci o mundo da programação e percebi as oportunidades que ele
          oferece, me apaixonei pela área. Atualmente, sou formado como Técnico
          em Desenvolvimento de Sistemas (DS) pela Etec Professor Basilides de
          Godoy.
          <p className="mt-4">
            No meu dia a dia, desenvolvo projetos utilizando ReactJS e Tailwind.
            No entanto, estou sempre em busca de ampliar meus conhecimentos,
            explorando novos frameworks e tecnologias para evoluir
            constantemente. Busco oportunidades de estágio para meu
            desenvolvimento profissional, já que ainda não atuei formalmente na
            área.
          </p>
          <div className="flex mt-12 gap-2 text-3xl">
            <i className="cursor-pointer devicon-html5-plain colored"></i>
            <i className="cursor-pointer devicon-css3-plain colored"></i>
            <i className="cursor-pointer devicon-javascript-plain colored"></i>
            <i className="cursor-pointer devicon-csharp-plain colored"></i>
            <i className="cursor-pointer devicon-bootstrap-plain colored"></i>
            <i className="cursor-pointer devicon-react-original colored"></i>
            <i className="cursor-pointer devicon-tailwindcss-original colored"></i>
            <i className="cursor-pointer devicon-mysql-original colored"></i>
          </div>
        </p>
      </div>
    </div>
  );
}
