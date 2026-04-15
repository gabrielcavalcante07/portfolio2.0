import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Aboutme } from "./components/Aboutme";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Technologies } from "./components/Technologies";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Aboutme />
      <Technologies />
      <Projects />
      <Footer />
    </>
  );
}
