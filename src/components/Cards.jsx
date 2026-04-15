import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { ButtonGlass } from "./ButtonGlass";
import { Plus, X, Github, SquareArrowOutUpLeftIcon } from "lucide-react";

export function Cards({img, title, firstContent, secondContent, thirdContent, ar, repo, techs}) {
  const [visible, setVisible] = useState(false); 

  const FooterDialog = (
    <div className="flex justify-end gap-2 pt-2">
      <ButtonGlass 
        link={ar}
        icon={<SquareArrowOutUpLeftIcon size="17"/>}
        content="Ver No Ar"
        buttonClass={"w-full lg:w-auto justify-center"}
        target={"_blank"}
      />
      <ButtonGlass 
        link={repo}
        icon={<Github size="17"/>}
        content="Repositório"
        buttonClass={"w-full lg:w-auto justify-center"}
        target={"_blank"}
      />
    </div>
  )
  return (
    <div className="overflow-hidden transition-transform duration-500 relative">
      <div className="w-full h-rem flex flex-col justify-end items-start rounded-2xl overflow-hidden">
        <div className="absolute w-full h-full overflow-hidden rounded-2xl z-0">
          <img
            src={img}
            className="w-full h-full object-cover overflow-hidden rounded-2xl transition-transform 
            duration-500 hover:scale-110"
            alt="Imagem do Projeto"
          />
          <div className="absolute bottom-0 w-full h-32 shadow-glass backdrop-blur bg-black/30 
          rounded-2xl z-10"/>
        </div>

        <h1 className="font-semibold text-xl px-4 relative z-10">{title}</h1>
        <p className="px-4 my-2 text-xs1 text-start line-clamp-1 font-medium relative z-10">
          {firstContent}
        </p>

        <div className="flex w-full justify-between items-center px-3 py-2">
          <div className="z-10 grid grid-cols-4 sm:grid-cols-8 gap-1">
            {techs.map((tech, index) => (
              <div 
                key={index} 
                className={`devicon-${tech} z-10 text-[1.1rem] shadow-glass 
                backdrop-blur-sm px-4 py-[0.4rem] rounded-full ease-in duration-150 hover:scale-105
                cursor-pointer flex justify-center ${index >= 4 ? 'hidden' : ''}`} />
            ))}
          </div>   
          <a
            onClick={() => setVisible(true)}
            className="bg-black/10 backdrop-blur-md text-center shadow-glass px-4 py-3 flex 
            items-center h-10 rounded-full text-xs cursor-pointer overflow-hidden duration-300 
            delay-75 gap-5 ease-in-out w-[5.3rem] lg:hover:w-32 lg:hover:gap-2"
          >
            <span className="flex whitespace-nowrap ease duration-300 delay-75">
              Ver mais
            </span>
            <i><Plus /></i>
          </a>
        </div>

        <Dialog
          header={title}
          headerStyle={{ marginBottom: "1rem" }}
          footer={FooterDialog}
          dismissableMask={true}
          maskStyle={{ 
            background: "rgba(0, 0, 0, 0.400)",
            backdropFilter: "blur(10px)", 
          }}
          draggable={false}
          closeIcon={<X />}
          visible={visible}
          blockScroll="false"
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          className="backdrop-blur-0 shadow-glass rounded-3xl flex w-[88vw] h-[70vh] lg:w-9/12 lg:h-4/5 px-7 py-5 lg:p-14 font-semibold text-2xl gap-2"
        >
          <div className="lg:flex w-full h-full gap-10">
             <div className="flex lg:w-1/2 lg:h-[90%] mr-4 flex-col">
              <img
                src={img}
                alt="Imagem do Projeto"
                className="flex rounded-lg w-full h-full overflow-hidden object-cover"
              />

              <div className="px-1 py-3 gap-1 grid grid-cols-4 sm:grid-cols-8">
                {techs.map((tech, index) => (
                  <div key={index} className={`devicon-${tech} text-[1.1rem] shadow-glass 
                  backdrop-blur-sm px-4 py-[0.4rem] rounded-full ease-in duration-200
                  n cursor-pointer text-center`} />
                ))}   
              </div> 
            </div>
            <div className="flex flex-col gap-5 lg:py-0 lg:w-1/2">
              <p className="font-normal text-xs1 text-justify w-full">
                {firstContent}
              </p>
              <p className="font-normal text-xs1 text-justify w-full">
                {secondContent}
              </p>
              <p className="font-normal text-xs1 text-justify w-full">
                {thirdContent}
              </p>
              <div className="flex justify-start gap-2">
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

// VERSÃO ANTERIOR
// export function Cards({img, title, content, ar, repo, tech}) {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="w-full overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-500">
//       <div className="w-full h-rem flex flex-col justify-start items-center bg-black/10 backdrop-blur-sm 
//       shadow-glass rounded-2xl overflow-hidden p-3">

//         <div className="flex w-full h-72 overflow-hidden rounded-2xl">
//           <img src={img} className="w-full h-full object-cover overflow-hidden rounded-2xl transition-transform 
//            duration-500 hover:scale-110" alt="Imagem do Projeto"/>
//         </div>

//         <h1 className="font-semibold text-xl py-1">{title}</h1>
//         <p className="px-2 my-5 text-xs1 text-center  line-clamp-1 font-medium">{content}</p>

//         <ButtonGlass
//         content="Ver mais"
//         onClick={() => setVisible(true)}
//         class="cursor-pointer"
//         />
//         <Dialog 
//           header={title} 
//           headerStyle={{marginBottom: '1rem'}} 
//           dismissableMask={true} 
//           maskStyle={{background: '#00000044', backdropFilter: 'blur(7px)', transition: 'ease-in'}} 
//           draggable={false} 
//           closeIcon={<X/>} 
//           visible={visible} 
//           blockScroll="false"
//           onHide={() => {if (!visible) return; setVisible(false);}}
//           className="backdrop-blur-0 shadow-glass rounded-3xl flex w-9/12 h-4/5 p-14 font-semibold text-2xl gap-2">
//             <div className="flex gap-20 w-full h-full">
//               <div className="flex flex-col gap-5 w-1/2">
//                 <p className="font-normal text-xs1 text-start w-full">{content}</p>
//                 <div className="flex justify-start gap-2">
//                   {Array.isArray(techs) && techs.map((tech, idx) => (
//                     <i key={idx} className={tech}></i>
//                     ))}
//                 </div>
//                 <div className="flex justify-start gap-2">
//                   <a href={ar} target="_blank" className="bg-black border border-neutral-700 text-center flex 
//                   gap-2 items-center justify-center px-4 py-2 w-32 rounded-lg text-xs ease-out duration-1000 delay-75 
//                   hover:bg-black"><SquareArrow/>Ver No Ar</a>
//                   <a href={repo} target="_blank" className="bg-black border border-neutral-700 text-center flex gap-2 
//                   items-center justify-center px-4 py-1 w-32 rounded-lg text-xs ease-out duration-1000 delay-75 hover:bg-black">
//                     <Github size="24" color="#fff"/>Repositorio
//                   </a>
//                 </div>
//               </div>
//               <div className="flex w-1/2 h-2/3 mr-4">
//                 <img src={img} alt="" className="flex rounded-lg w-full h-full overflow-hidden object-cover"/>
//               </div>
//             </div>
//         </Dialog>
//       </div>
//     </div>
//   );
// }
