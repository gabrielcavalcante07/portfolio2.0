import { LucideArrowUpLeftFromSquare } from "lucide-react";
import { ButtonGlass } from "../components/ButtonGlass";
import { LightRays } from "../components/LightRays";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="absolute w-screen h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        {/* <h1 className="text-9xl">404</h1> */}
        <h2 className="text-[150px] lg:text-[200px] font-bold text-transparent bg-gradient-to-b from-white/10 to-white/5 bg-clip-text [-webkit-text-stroke:2px_rgba(255,255,255,0.3)] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          404
        </h2>
        <p className="mb-3 font-semibold -mt-10 lg:-mt-16">
          Página em desenvolvimento
        </p>
        <ButtonGlass
          content={
            <>
              Voltar para o íncio
              <LucideArrowUpLeftFromSquare width={19} />
            </>
          }
          spanClass="flex gap-2"
          link="/"
        />
      </div>
      <Footer />
    </>
  );
};
