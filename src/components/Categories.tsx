import { useState } from "react";
import { categories } from '../data/data';

export default function Categories() {

    const [hover, setHover] = useState<boolean>(false)
    const [color, setColor] = useState<string>()

  return (
    <div className='grid justify-center py-6 w-screen md:screen-7xl place-items-center'>
                <div className='w-full max-w-7xl text-center grid gap-6 px-4 pb-16'>
                  <h1 className='text-4xl text-gray-950 font-bold'>Categorías de Productos</h1>
                  <h3 className='text-xl text-gray-700 '>Explora nuestra amplia gama de componentes organizados por categorías para encontrar exactamente lo que necesitas.</h3>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-screen place-items-center 2xl:max-w-7xl`}>
                  {
                    categories.map(cat => 
                      <div key={cat.id} onMouseEnter={()=>{setHover(true); setColor(cat.color)}} onMouseLeave={()=>setHover(false)} className='min-w-96 w-[90%] text-center hover:shadow-xl cursor-pointer border-[.5px] border-gray-200 grid place-items-center justify-center p-6 rounded-2xl gap-6' >
                        <div className={`${cat.color} w-16 p-4 rounded-full ${hover && color === cat.color ? 'scale-125' : 'scale-100'} duration-300`}>
                          <img src={cat.icon} alt={cat.name} className='w-8 h-8' />
                        </div>
                        <div className='grid w-full items-center text-center'>
                          <h1 className='text-2xl text-gray-950 font-semibold'>{cat.name}</h1>
                        </div>
                        <div>
                          <h1 className='text-xl text-gray-800'>{cat.description}</h1>
                        </div>
                      </div>
                    )
                  }
                </div>
            </div>
  )
}
