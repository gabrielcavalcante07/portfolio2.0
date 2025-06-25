    export function Header() {
      return (
        <header className="bg-black/10 backdrop-blur-xl w-9/12 h-14 flex px-8 rounded-full items-center fixed top-0 left-2/4 -translate-x-2/4 z-20">
            <a href="#" className="text-3xl font-Beau-Rival">Gcsantos</a>
          <ul className="flex gap-4 absolute left-1/2 -translate-x-1/2">
            <a className="opacity-75 hover:opacity-100 duration-300" href="#home">Home</a>
            <a className="opacity-75 hover:opacity-100 duration-300" href="#aboutme">About me</a>
            <a className="opacity-75 hover:opacity-100 duration-300" href="#projects">Projects</a>
            <a className="opacity-75 hover:opacity-100 duration-300" href="#">Contact</a>
          </ul>
        </header>
      );
    }

    // @media (max-width: 768px){4
    //    .header{
    //       display: flex;
    //       top: unset;  
    //       bottom: 0;    
    //       width: 70vw;    
    //       justify-content: center;
    //    }
    //    #name{
    //       display: none;
    //    }

    // }