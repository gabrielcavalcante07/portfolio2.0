import imgProject from '../assets/projectConvert.png';

export function Projects(){
    return(
        <div className='mt-12 bg-zinc-900 text-white w-80 min-h-80 rounded-2xl overflow-hidden border-primary'>
            <div className="flex flex-col justify-center items-center">
                <img src={imgProject} className='w-full h-40 object-cover' alt="" />
                <h1 className='font-semibold text-2xl mt-2 text-primary'>Projeto</h1>
                <p className='px-3 py-4 text-center text-xs'>Aplicação de conversão de dinheiro em real (BRl) para dólar, Euro e Libra Esterlina</p>
                <a href='#' className='text-center border-2 border-primary px-5 py-2 w-40 rounded-lg text-primary text-xs hover:bg-primary hover:text-white transition-colors duration-200'>Ver mais</a>
            </div>
        </div>
    );
}