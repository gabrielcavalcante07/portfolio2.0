import SplitText from "./SplitText";

export function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div
      className="pointer-events-none font-semibold flex flex-col justify-center items-center h-screen w-screen z-0"
      id="home"
    >
      <SplitText
        text="Hi, I'm Gabriel Cavalcante"
        className="text-xl font-semibold text-center lg:text-2xl"
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
        className="text-xl font-semibold text-center lg:text-2xl"
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
  );
}
