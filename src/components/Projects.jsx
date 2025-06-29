export function Projects(props){
    return(
        <div className='w-72 h-80 mt-12 bg-zinc-900 text-white p-[2px] bg-gradient-to-b from-primary to-indigo-600 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500'>
            <div className="h-full pb-5 flex flex-col justify-center items-center bg-zinc-900 rounded-2xl text-white">
                <img src={props.img} className='w-full h-40 object-cover rounded-2xl p-2 overflow-hidden' alt="" />
                <h1 className='font-semibold text-xl text-primary py-1'>{props.title}</h1>
                <p className='px-4 py-5 text-start text-xs'>{props.content}</p>
                <a href={props.link} className='text-center border-2 border-primary px-5 py-2 mt-2 w-40 rounded-lg text-primary text-xs hover:bg-primary ease-out duration-500 hover:text-white'>Ver mais</a>
            </div>

        </div>
    );
}

<div className="p-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
  <div className="bg-zinc-900 rounded-lg p-4 text-white">
    Conteúdo com borda em degradê
  </div>
</div>
