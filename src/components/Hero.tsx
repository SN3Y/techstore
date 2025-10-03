export default function Hero() {
  return (
    <div className="relative grid justify-center items-center w-screen p-6 md:p-12 text-white min-h-[746px]">
        <div className="absolute z-0 inset-0 bg-center bg-no-repeat bg-cover bg-[url(/hardwarebg.jpeg)] w-screen "></div>
            <div className="absolute z-0 inset-0 w-screen bg-gray-900/80"></div>

            <div className="z-1 grid gap-6 place-items-center max-w-7xl">
            <div className='w-full max-w-7xl'>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-start">Los Mejores Componentes de Hardware</h1>
                <h4 className='text-2xl text-start'>Encuentra los procesadores, tarjetas gráficas, memoria RAM y más componentes de alta calidad para construir tu PC ideal.</h4>
            </div>
            <div className='grid md:flex gap-6 w-full'>
                <button className=' w-[90%] md:w-80 bg-gray-950 text-2xl font-semibold p-4 rounded-xl'>
                Ver Productos
            </button>
            <button className=' w-[90%] md:w-80 text-2xl font-semibold border-2 p-4 rounded-xl bg-white 2xl:text-white text-gray-950 md:hover:text-gray-950'>
                Ofertas Especiales
            </button>
            </div>
            </div>
    </div>
  )
}
