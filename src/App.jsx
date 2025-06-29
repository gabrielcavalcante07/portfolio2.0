import "./App.css";
// import { VideoBack } from "./components/VideoBack";
import { Header } from "./components/Header";
import Orb from "./components/Orb";
import { Home } from "./components/Home";
import { Aboutme } from "./components/Aboutme";
import { Projects } from "./components/Projects";
import imgConvert from './assets/projectConvert.png';
import imgRaptor from './assets/projectRaptor.png';
import imgShadowfy from './assets/projectShadowfy.png';
import imgValentines from './assets/projectValentines.png';

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
      <Home />
      <Aboutme />
      <div
        className="flex flex-col items-center w-screen h-screen mt-52 scroll-m-20"
        id="projects"
      >
        <h1 className="text-primary text-4xl font-semibold">Projects</h1>
        <div className="flex flex-col gap-1 w-4/5 items-center lg:flex-row lg:gap-4">
            <Projects 
            img={imgRaptor}
            title="Raptor Street"
            content="Aplicação de um sitema ecomercce para uma loja de tênis."
            link="https://github.com/gabrielcavalcante07/Raptor-Street2.0"
            />
            <Projects 
            img={imgConvert}
            title="Convert Current"
            content="Aplicação de conversão de dinheiro em real (BRl) para dólar, Euro e Libra Esterlina."
            link="https://gabrielcavalcante07.github.io/convertCurrency/"
            />
            <Projects 
            img={imgShadowfy}
            title="Shadowfy"
            content="Sistema de uma Plataforma de Música."
            link="https://github.com/gabrielcavalcante07/Shadowfy"
            />
            <Projects 
            img={imgValentines}
            title="Valentin's day"
            content="Aplicação para o dias dos namorados, com data dinâmica de quanto tempo o casal está junto."
            link="https://murilloevelyn.netlify.app/"
            />
        </div>
      </div>
    </>
  );
}
