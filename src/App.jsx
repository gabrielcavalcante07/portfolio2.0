import "./App.css";
// import { VideoBack } from "./components/VideoBack";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Aboutme } from "./components/AboutMe";
import Orb from "./components/orb";
import SplitText from "./components/SplitText";
import { Projects } from "./components/projects";

export function App() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
    <>
      <Header />
      <div className="absolute w-screen h-screen object-cover z-10 translate-x-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className="pointer-events-none font-semibold flex flex-col justify-center items-center h-screen w-screen z-0" id="home">

      <SplitText
        text="Hi, I'm Gabriel Cavalcante"
        className="text-2xl font-semibold text-center"
        delay={100}
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
        text="Develop Frontend"
        className="text-2xl font-semibold text-center"
        delay={150}
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
    </div>
      <Aboutme />  
      <div className="flex flex-col items-center w-screen h-screen mt-52" id="projects">
        <h1 className="text-primary text-4xl font-semibold">Projects</h1>
        <div className="flex gap-5">
        <Projects/>
        <Projects/>
        <Projects/>
        </div>
      </div>
    </>
  );
}
