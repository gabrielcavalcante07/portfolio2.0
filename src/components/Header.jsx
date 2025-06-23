    export function Header() {
      return (
        <header className="bg-black/10 backdrop-blur-xl w-9/12 h-16 flex px-8 rounded-full items-center fixed top-0 left-2/4 -translate-x-2/4 z-20">
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

    // .header {
    //    width: 80vw;
    //    height: 10vh;
    //    display: flex;
    //    color: #fff;
    //    justify-content: space-between;
    //    padding-inline: 2rem;
    //    border-radius: 50px;
    //    align-items: center;
    //    position: fixed;
    //    top: 0;
    //    left: 50%;
    //    transform: translate(-50%);
    //    backdrop-filter: blur(4px);
    // }

    // #name{
    //    font-family: beau rivage;
    //    font-size: 2.25rem;
    //    transition: 0.3s;
    // }

    // .list {
    //    display: flex;
    //    gap: 0.74rem;
    // }

    // .list a {
    //    display: flex;
    //    text-decoration: none;  
    //    cursor: pointer;
    //    opacity: 0.75;
    //    transition: 0.3s;
    // }

    // .list a:hover{
    //    opacity: 1;
    //    text-decoration-thickness: underline overline;
    // }


    // @media (max-width: 768px){
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