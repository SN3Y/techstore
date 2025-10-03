import cartwhite from '../assets/cartwhite.png';
import filledstar from '../assets/filledstar.png'
import emptystar from '../assets/emptystar.png'


import {featuredProducts} from '../data/data'

export default function Products() {
  return (
    <section className='grid justify-center py-24 w-screen md:screen-7xl place-items-center'>
        <div className='w-full max-w-7xl text-center grid gap-6 px-4 pb-16'>
          <h1 className='text-4xl text-gray-950 font-semibold'>Productos Destacados</h1>
            <h3 className='text-2xl text-gray-700 '>Descubre nuestra selección de componentes de hardware de alta calidad con las mejores ofertas del mercado.</h3>
        </div>
        <div className='w-full max-w-7xl px-4 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
              featuredProducts.map(product => 
                <div key={product.id} className='grid relative border-[.5px] w-full overflow-hidden rounded-xl border-gray-200'>
                  <div className='w-full absolute flex justify-between h-10 items-center z-10 px-3'>
                    {
                      product.isOnSale ?
                      <div><h1 className='text-white px-3 bg-red-500 rounded-lg'>Oferta</h1></div>
                      :
                      <div className='z-[-1]'>
                        
                      </div>
                    }
                    <div><h1 className='px-3 bg-gray-200 rounded-lg font-semibold'>{product.category}</h1></div>
                  </div>
                    <div className='overflow-hidden'>
                      <img src={product.image} alt={product.name} className='h-48 md:object-cover md:h-72 object-cover w-full hover:scale-105 duration-300' />
                    </div>
                    <div className='grid gap-6 p-6'>
                      <h1 className='text-xl md:text-2xl text-gray-900 font-semibold'>{product.name}</h1>
                    </div>
                    <div className='flex gap-2 px-6 items-center'>
                      {
                        Array.from({ length: Math.floor(Number(product.rating)) }).map((_, index) => (
                          <img key={Number(_).toString()+index} src={filledstar} alt="yellow star" className='h-5'/>
                        ))
                      }
                      {
                        Number(product.rating.toLocaleString().split(",")[1]) > 9 ?
                        <img src={filledstar} alt="yellow star" className='h-5'/>
                        :
                        <img src={emptystar} alt="yellow star" className='h-5'/>
                      }
                      <h1 className='ps-2 text-gray-500 text-lg'>({product.reviews})</h1>
                    </div>
                    <div className='flex p-6 gap-2'>
                      <h1 className='text-2xl md:text-3xl text-gray-900 font-bold'>${product.price}</h1> 
                      {
                        product.originalPrice ?
                        <h1 className='text-2xl md:text-3xl text-gray-500 font-thin line-through'>${product.originalPrice}</h1>
                        :
                        <></>
                      }
                    </div>
                    <div className='w-full p-4'>
                      <button className='w-full py-2 bg-gray-950 hover:bg-gray-900 rounded-md flex items-center justify-center gap-6 text-white'>
                          <img src={cartwhite} alt="cart white" className='h-5 text-white' />
                          <h1 className='text-lg'>Añadir al carrito</h1>
                      </button>
                    </div>
                </div>
              )
            }
        </div>
      </section>
  )
}
