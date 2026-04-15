import iconMacClose from "../assets/close.png";
import iconMacMinimize from "../assets/minimize.png";
import iconMacExpand from "../assets/expand.png";
import { Cog, Database, Globe, Wrench } from "lucide-react";
import { CardsTechs } from "./CardsTechs";

export function Technologies() {
  return (
    <div className="w-screen flex flex-col items-center justify-center mt-32 overflow-hidden">
      <div className="relative w-[85vw] sm:w-4/5 py-10 px-4 sm:px-10 rounded-lg bg-zinc-950 border border-zinc-700">

        <div className="flex items-center justify-center">
          <div className="group p-1 absolute top-2 left-2">
            <button
              className="w-[1.1rem] h-[1.1rem] rounded-full bg-red-500 mr-1 outline-none p-1"
            />
            <button
              className="w-[1.1rem] h-[1.1rem] rounded-full bg-yellow-500 mr-1 p-1 group:"
            />
            <button
              className="w-[1.1rem] h-[1.1rem] rounded-full bg-green-500 p-1 group:"
            />
          <span className="text-xl font-semibold ml-3 font-inter">Tecnologias</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">

          <div className="rounded-md flex p-4 shadow-glass overflow-hidden ease-in-out duration-300 hover:scale-[1.02]">  
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-2">
                  <Globe />
                <h2 className="font-semibold">Frontend</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                <CardsTechs
                  iconTech={"react-plain colored"}
                  nameTech={"React"}
                />
                <CardsTechs
                  iconTech={"javascript-plain colored"}
                  nameTech={"JavaScript"}
                />
                <CardsTechs
                  iconTech={"typescript-plain colored"}
                  nameTech={"TypeScript"}
                />
                <CardsTechs
                  iconTech={"tailwindcss-plain colored"}
                  nameTech={"Tailwind"}
                />
              </div>
            </div>
          </div>

          <div className="rounded-md flex p-4 shadow-glass overflow-hidden ease-in-out duration-300 hover:scale-[1.02]">  
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-2">
                  <Cog />
                <h2 className="font-semibold">Backend</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                <CardsTechs 
                  imgTech={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"}
                  nameTech={"Java (Estudando)"}
                />
              </div>
            </div>
          </div>

          <div className="rounded-md flex p-4 shadow-glass overflow-hidden ease-in-out duration-300 hover:scale-[1.02]">  
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-2">
                  <Database />
                <h2 className="font-semibold">Banco de dados</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                <CardsTechs
                  iconTech={"mysql-plain colored"}
                  nameTech={"MySQL"}
                />
              </div>
            </div>
          </div>

          <div className="rounded-md flex p-4 shadow-glass overflow-hidden ease-in-out duration-300 hover:scale-[1.02]">  
            <div className="flex flex-col gap-5 w-full">
              <div className="flex items-center gap-2">
                  <Wrench />
                <h2 className="font-semibold">Ferramnetas</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                <CardsTechs
                  iconTech={"git-plain colored"}
                  nameTech={"Git"}
                />
                <CardsTechs
                  iconTech={"github-plain"}
                  nameTech={"Github"}
                />
                <CardsTechs
                  imgTech={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"}
                  nameTech="VS Code"
                  />
                <CardsTechs
                  imgTech={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg"}
                  nameTech="Visual Studio"
                  />
                <CardsTechs
                  imgTech={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"}
                  nameTech="Figma"
                />
                <CardsTechs
                  iconTech="vercel-plain"
                  nameTech="Vercel"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
