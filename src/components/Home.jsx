import { TextType } from "./TextType";
import { Linkedin } from "./icons/linkedin";
import Balatro from "./Balatro";
import { Github } from "./icons/gitHub";

export function Home() {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen w-screen" id="home">
      <div className="absolute w-screen h-[calc(100vh+30vh)]">
        <Balatro
          isRotate={true}
          mouseInteraction={false}
          pixelFilter={10000}
          color1="#000"
          color2="#111111"
          color3="#000"
          spinEase={0.4}
          contrast = {3.5}
          spinSpeed={7}
        />
        <div className="absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent via-background to-background z-10">
        </div>
      </div>


      <div className="flex w-screen h-16 z-10 text-center px-10 justify-center">
        <TextType
          text={["Olá, eu sou Gabriel Cavalcante", "Desenvolvedor FullStack"]}
          className="font-bold text-2xl opacity-80 lg:text-5xl"
          typingSpeed={38}
          pauseDuration={1500}
          showCursor
          cursorCharacter="●"
          texts={[
            "Welcome to React Bits! Good to see you!",
            "Build some amazing experiences!",
          ]}
          deletingSpeed={35}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
      </div>

      <div className="w-screen flex justify-center gap-2 px-4 mt-6">
        <a href="https://linkedin.com/in/gabrielcsantoss" target="_blank"
          className="bg-black/10 w-14 backdrop-blur-sm items-center shadow-glass overflow-hidden px-4 py-3 mt-2 rounded-full text-xs1 gap-5 flex ease-in-out duration-300 delay-75 stroke-white hover:stroke-blueIn hover:w-32 hover:gap-2">
            <i><Linkedin/></i>
            <span className="flex items-center whitespace-nowrap">Linkedin</span>
        </a>
        <a href="https://github.com/gabrielcavalcante07" target="_blank"
          className="bg-black/10 w-14 backdrop-blur-sm shadow-glass overflow-hidden px-4 py-3 mt-2 rounded-full text-xs1 gap-5  flex ease-in-out duration-300 delay-75 stroke-white hover:stroke-red-500 hover:w-28 hover:gap-2">
            <i><Github size="24"/></i>
            <span className="flex items-center whitespace-nowrap ease duration-300 delay-75">Github</span>
        </a>
      </div>
    </div>
  );
}

/* <div className="flex flex-col w-full h-full justify-center items-center absolute">
  <SplitText
    text="Olá, eu sou Gabriel Cavalcante"
    className="text-xl font-semibold text-center lg:text-3xl"
    delay={40}
    duration={0.3}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="center"
    onLetterAnimationComplete={handleAnimationComplete}
  />
  
  <SplitText
    text="Desenvolvedor Fullstack"
    className="text-xl font-semibold text-center lg:text-3xl"
    delay={60}
    duration={0.6}
    ease="power3.out"
    splitType="chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    textAlign="center"
    onLetterAnimationComplete={handleAnimationComplete}
  />
</div> */