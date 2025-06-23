import background from "../assets/background.mp4";

export function VideoBack() {
  return (
   <video className="absolute w-screen h-screen object-cover translate-0 -z-10" 
   autoPlay muted loop playsInline 
   src={background}>
   </video>
  );
}
