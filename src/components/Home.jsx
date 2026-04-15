import { TextType } from "./TextType";
import { Balatro } from "./Balatro";
import { Linkedin, Github } from "lucide-react"

export function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen"
      id="home"
    >
      <div className="absolute w-screen h-[calc(100vh+30vh)]">
        <Balatro
          isRotate={true}
          mouseInteraction={false}
          pixelFilter={10000}
          color1="#000"
          color2="#111111"
          color3="#000"
          spinEase={0.4}
          contrast={3.5}
          spinSpeed={7}
        />
        <div
          className="absolute -mb-1 bottom-0 w-full h-28 bg-gradient-to-b from-transparent
       via-background to-background z-10"
        />
      </div>
      <div className="flex w-screen h-16 z-10 text-center px-10 justify-center">
        <TextType
          text={["Olá, eu sou Gabriel Cavalcante", "Desenvolvedor FullStack"]}
          className="font-bold text-2xl text-slate-50 lg:text-5xl"
          typingSpeed={38}
          pauseDuration={1500}
          showCursor
          cursorCharacter="●"
          deletingSpeed={33}
          variableSpeed={{ min: 20, max: 30 }}
          cursorBlinkDuration={0.5}
        />
      </div>

      <div className="w-screen flex justify-center gap-2 px-4 mt-6">
        <a
          href="https://linkedin.com/in/gabrielcsantoss"
          target="_blank"
          className="bg-black/10 w-[3rem] backdrop-blur-sm items-center shadow-glass
          overflow-hidden px-[0.85rem] py-3 mt-2 rounded-full text-xs1 gap-5 flex ease-in-out
          duration-300 hover:w-[7.3rem] hover:gap-2 group"
        >
          <i>
            <Linkedin size="22" className="ease-in-out duration-300
            group-hover:stroke-blueIn" />
          </i>
          <span className="flex items-end whitespace-nowrap ease duration-300">
            Linkedin
          </span>
        </a>
        <a
          href="https://github.com/gabrielcavalcante07"
          target="_blank"
          className="bg-black/10 w-[3rem] backdrop-blur-sm items-center shadow-glass overflow-hidden
          px-[0.85rem] py-3 mt-2 rounded-full text-xs1 gap-5 flex ease-in-out duration-300 stroke-white
         hover:stroke-red-500 hover:w-[6.5rem] hover:gap-2 group"
        >
          <i>
            <Github size="22" className="ease-in-out duration-300
            group-hover:stroke-red-500" />
          </i>
          <span className="flex items-end whitespace-nowrap ease duration-300">
            Github
          </span>
        </a>
      </div>
    </div>
  );
}