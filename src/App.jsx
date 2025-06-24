import "./App.css";
// import { VideoBack } from "./components/VideoBack";
import { Header } from "./components/Header";
import Orb from "./components/Orb";
import { Home } from "./components/Home";
import { Aboutme } from "./components/Aboutme";
import { Projects } from "./components/Projects";

export function App() {
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
      <Home/>
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
