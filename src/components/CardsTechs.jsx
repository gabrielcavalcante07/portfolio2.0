export function CardsTechs({imgTech, iconTech, nameTech, cardClass}) {
  return (
    <div className={`border border-zinc-700 bg-black/10 flex items-center 
    justify-center rounded-lg flex-col gap-2 w-full p-3 
    ease-out duration-300 hover:scale-105 hover:border-white ${cardClass}`}>
      <img src={imgTech} className="w-9" />
      <i className={`devicon-${iconTech} text-4xl`} />
      <span className="font-semibold font-inter text-center">{nameTech}</span>
    </div>
  );
}
 //px-4 py-2 sm:py-3 sm:px-20