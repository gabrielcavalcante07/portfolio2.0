// .me{
//     margin-top: 5rem;
//     display: flex;
//     width: 85vw;
//     gap: 8rem;
// }

import mephoto from "../assets/me.png";

export function Aboutme() {
  return (
    <div
      className="mt-14 flex flex-col justify-center items-center"
      id="aboutme"
    >
      <h1 className="text-primary text-4xl font-semibold">About Me</h1>
      <div className="mt-20 flex w-4/5 gap-32">
        <img src={mephoto} className="w-80 rounded-full" alt="photo me" />
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eveniet.
          Perspiciatis vel architecto reprehenderit doloremque? Fuga obcaecati
          aut magni! Unde qui labore amet? Qui, cum rerum. Quibusdam earum
          aliquam placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quia rerum molestiae esse cumque eos quasi animi consequatur quas tempora 
          optio earum laudantium repellat ad, totam sequi molestias aperiam ipsam odit?
          <div className="flex mt-12 gap-2 text-3xl">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-csharp-plain colored"></i>
            <i className="devicon-bootstrap-plain colored"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-tailwindcss-original colored"></i>
            <i className="devicon-mysql-original colored"></i>
          </div>
        </p>
      </div>
    </div>
  );
}
