import { X, Send, Linkedin, Github, Mail } from "lucide-react";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import iconMacClose from "../assets/close.png";
import iconMacMinimize from "../assets/minimize.png";
import iconMacExpand from "../assets/expand.png";
import emailjs from '@emailjs/browser';
import { createPortal } from "react-dom";

export const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [maxMin, setMaxMin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessages, setAlertMessages] = useState(null);
  
  function ClosedWindow() {
    setVisible(false);
    setMaxMin(false);
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  }
  function MaximizeWindow() {
    setMaxMin(true);
  }
  function MinimizeWindow() {
    setMaxMin(false);
  }

  function SendMessage(event) {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const templateParams = {
        userName: userName,
        userEmail: userEmail,
        userMessage: userMessage
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.send(serviceId,templateId, templateParams, publicKey)
    .then((response) => {
      console.log(response, "Success!")
      setUserName("");
      setUserEmail("");
      setUserMessage("");
      setAlertMessages({
        type: "success",
        text: "Mensagem enviada com sucesso!"
      })
      setTimeout(() => {
        setAlertMessages(null);
      },3000)
    }) 
    .catch((error) => {
      console.log(error);
      setAlertMessages({
        type: "error",
        text: "Falha ao enviar a mensagem!"
      })
      setTimeout(() => {
        setAlertMessages(null);
      },3000)
    })
    .finally(() => {
      setIsLoading(false);
      });
  } 
  
  return (
    <>
    {alertMessages && createPortal(
      <div className="fixed inset-0 z-[9999] flex justify-center items-start pt-5 sm:items-end sm:pb-5  
      pointer-events-none">
        <div
          className={`px-6 py-3 rounded-full shadow-glass backdrop-blur-md text-sm font-medium
          ${
            alertMessages.type === "success"
              ? "bg-green-500/20 text-green-300"
              : "bg-red-500/20 text-red-300"
          }`}
        >
      {alertMessages.text}
    </div>
  </div>,
  document.body
)}
      <div className="flex w-full">
          <button 
            className="text-center sm:shadow-glass sm:px-4 sm:py-3 flex items-center sm:h-10 
            sm:rounded-full text-xs overflow-hidden duration-300 delay-75 sm:backdrop-blur-[5px]
            sm:bg-black/30" 
            onClick={() => setVisible(true)}
          >
            <div className="flex sm:hidden opacity-75 hover:opacity-100 
            duration-300">
              <Mail />
            </div>
            <div className="font-semibold hidden sm:flex">
              Contato
            </div>
          </button>
      </div>
      <Dialog
        dismissableMask={true}
        maskStyle={{
          background: "rgba(0, 0, 0, 0.400)",
          backdropFilter: "blur(10px)",
        }}
        draggable={false}
        visible={visible}
        blockScroll="false"
        onHide={() => {
          if (!visible) return;
          setVisible(false) & setMaxMin(false);
        }}
        closeIcon={<X />}
        showCloseIcon={false}
        header={
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="absolute top-1 left-4  group p-1">
              <button
                onClick={ClosedWindow}
                className="w-[1.1rem] h-[1.1rem] rounded-full bg-red-500 mr-1 outline-none p-1"
              >
                <img
                  src={iconMacClose}
                  alt="Ícone de fechar a janela"
                  className="opacity-0 group-hover:opacity-100 duration-75 ease-in"
                />
              </button>
              <button
                onClick={MinimizeWindow}
                className="w-[1.1rem] h-[1.1rem] rounded-full bg-yellow-500 mr-1 p-1 group:"
              >
                <img
                  src={iconMacMinimize}
                  alt="Ícone de minimizar a janela"
                  className="opacity-0 group-hover:opacity-100 duration-75 ease-in"
                />
              </button>
              <button
                onClick={MaximizeWindow}
                className="w-[1.1rem] h-[1.1rem] rounded-full bg-green-500 p-1 group:"
              >
                <img
                  src={iconMacExpand}
                  alt="Ícone de expandir a janela"
                  className="opacity-0 group-hover:opacity-100 duration-75 ease-in"
                />
              </button>
            </div>
            <a
              href="https://github.com/gabrielcavalcante07"
              target="_blank"
              className="bg-black/10 backdrop-blur-md text-center shadow-glass p-3 flex 
              justify-center items-center gap-2 rounded-full text-xs cursor-pointer overflow-hidden 
              duration-300 delay-75"
            >
              <Github size={21} color="white" />
            </a>
            <a
              href="https://linkedin.com/in/gabrielcsantoss"
              target="_blank"
              className="bg-black/10 backdrop-blur-md text-center shadow-glass p-3 flex justify-center
              items-center gap-2 rounded-full text-xs cursor-pointer overflow-hidden duration-300 delay-75"
            >
              <Linkedin size={21} color="white" />
            </a>
            <a
              href="https://wa.me/+5511941741429"
              target="_blank"
              className="bg-black/10 backdrop-blur-md text-center shadow-glass p-3 flex justify-center
             items-center gap-2 rounded-full text-xs cursor-pointer overflow-hidden duration-300 delay-75"
            >
              <Mail size={21} />
            </a>
          </div>
        }
        className={`backdrop-blur-0 shadow-glass rounded-3xl flex w-4/5 lg:w-1/2
        p-6 sm:px-14 sm:py-8 font-semibold text-2xl 
        ${maxMin ? "duration-300 ease-in-out w-screen h-screen lg:w-screen lg:h-screen" 
        : "duration-300 ease-in-out"}`
        }
      >
        <form
          action=""
          method=""
          onSubmit={SendMessage}
          className="px-1 flex flex-col items-center justify-center gap-5 overflow-hidden mt-4"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5 w-full">
            <div className="flex flex-col w-full">

              <label htmlFor="name" className="text-xs1 ml-1">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={userName}
                required
                placeholder="Seu nome"
                onChange={(e) => {
                  const valueName = e.target.value;
                  setUserName(valueName);
                }}
                onInvalid={(e) => {
                  e.currentTarget.setCustomValidity("Preencha seu nome")
                }}
                onInput={(e) => {
                  e.currentTarget.setCustomValidity("")
                }}
                className="px-4 py-3 rounded-lg bg-black/10 text-xs shadow-glass backdrop-blur 
                font-normal outline-none focus:border"
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-xs1 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userEmail}
                required
                placeholder="example@email.com"
                onChange={(e) => {
                  const valueEmail = e.target.value;
                  setUserEmail(valueEmail);
                }}
                onInvalid={(e) => {
                  e.currentTarget.setCustomValidity("Preencha seu email")
                }}
                onInput={(e) => {
                  e.currentTarget.setCustomValidity("")
                }}
                className="px-4 py-3 rounded-lg bg-black/10 text-xs shadow-glass backdrop-blur font-normal 
                outline-none focus:border"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="text-xs1 flex justify-start">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                value={userMessage}
                required
                placeholder="Digite sua mensagem aqui"
                onChange={(e) => {
                  const valueMessage = e.target.value;
                  setUserMessage(valueMessage);
                }}
                onInvalid={(e) => {
                  e.currentTarget.setCustomValidity("Preencha sua mensagem")
                }}
                onInput={(e) => {
                  e.currentTarget.setCustomValidity("")
                }}
                className="resize-none rounded-lg bg-black/10 text-xs1 shadow-glass backdrop-blur px-5 py-2 
                font-normal outline-none focus:border"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            onInvalid={(e) => {
                  e.currentTarget.setCustomValidity("Preencha o seu nome")
                }}
            className={`bg-black/10 backdrop-blur-md text-center shadow-glass px-4 py-3 flex justify-center 
            items-center h-10 gap-2 rounded-full text-xs cursor-pointer overflow-hidden duration-300 delay-75 
            w-full stroke-white ${isLoading ? "disabled:opacity-[0.7] disabled:cursor-not-allowed" : ""}`}
          >
            <>
              {isLoading ? "Enviando..." : "Enviar mensagem"}
              <Send size={16} />
            </>
          </button>
        </form>
      </Dialog>
    </>
  );
};