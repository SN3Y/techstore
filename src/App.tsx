import cart from './assets/cart.png';
import user from './assets/user.png';
import zoom from './assets/zoom.png';
import bars from './assets/bars.png';
import letterX from './assets/letter-x.png';


import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Categories from './components/Categories';
import Contact from './components/Contact';



export default function App() {

  const [openHamburger, setOpenHamburger] = useState<boolean>(false)

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);



  useEffect(()=>{
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      if(window.innerWidth > 960){
        setOpenHamburger(false)
      }
    };
    window.addEventListener('resize', handleResize)
    


    return () => window.removeEventListener('resize', handleResize)
  },[screenWidth, openHamburger])
  
  return (
    <div className="w-screen h-screen flex flex-col place-items-center">
        <header className="w-screen fixed border-gray-400 place-items-center z-50 bg-white h-auto">
          {
            screenWidth > 960 ?
              <nav className="flex relative items-center justify-between px-10 h-20 w-full max-w-7xl">
                  <div className="flex items-center">
                    <h1 id="#Inicio" className="text-3xl font-bold">TechStore</h1>
                  </div>
                  <div className="md:flex md:h-20 md:gap-6 ps-4 md:ps-0 grid absolute top-15 md:top-0 md:border-t-0 border-t-[0.5px] border-gray-200 md:w-auto w-[88%] md:relative h-60">
                    <div className="w-fit flex items-center"><a href="#Inicio"><h1 className="text-xl font-thin">Inicio</h1></a></div>
                    <div className='w-fit flex items-center'><a href="#Productos"><h1 className="text-xl font-thin">Productos</h1></a></div>
                    <div className='w-fit flex items-center'><a href="#Categorías"><h1 className="text-xl font-thin">Categorías</h1></a></div>
                    <div className='w-fit flex items-center'><a href="#Ofertas"><h1 className="text-xl font-thin">Ofertas</h1></a></div>
                    <div className='w-fit flex items-center'><a href="#Contacto"><h1 className="text-xl font-thin">Contacto</h1></a></div>
                  </div>
                  <div className="flex gap-4 top-76 ps-4 md:ps-0">
                    <div className='hover:bg-gray-200 p-2 rounded-md flex items-center'>
                      <img src={zoom} alt="zoom" className="w-5 h-5 " />
                    </div>
                    <div className='hover:bg-gray-200 p-2 rounded-md flex items-center'>
                      <img src={user} alt="user" className="w-5 h-5 " />
                    </div>
                    <div className='hover:bg-gray-200 p-2 rounded-md flex items-center'>
                      <img src={cart} alt="cart" className="w-5 h-5 " />
                    </div>
                  </div>
                  
              </nav>
              :
              <div className='grid relative overflow-hidden z-10 w-full border-gray-200 border-b-[.5px]' style={{height: !openHamburger ? 80 : "auto"}}>

              <div className='flex items-center justify-between px-10 h-20'>
                <div className="flex items-center">
                    <h1 id="#Inicio" className="text-2xl font-bold">TechStore</h1>
                </div>
                <button onClick={()=>setOpenHamburger(!openHamburger)} id='hamburger' className="flex p-2 hover:bg-gray-200 rounded-md">
                    {
                      openHamburger ?
                      <img src={letterX} alt="letter-x" className='w-6 h-5'/>
                      :
                      <img src={bars} alt="bars" className='w-5 h-5'/>
                    }
                  </button>   
              </div>
               <div className='bg-white border-t-[0.5px] border-gray-200 w-[90%] place-self-center h-full pb-4' style={{display: openHamburger ? "grid" : "none"}}>
                      <div className="ps-6 grid">
                        <div className="w-fit flex items-center py-4"><a href="#Inicio"><h1 className="text-xl font-light">Inicio</h1></a></div>
                        <div className='w-fit flex items-center py-4'><a href="#Productos"><h1 className="text-xl font-light">Productos</h1></a></div>
                        <div className='w-fit flex items-center py-4'><a href="#Categorías"><h1 className="text-xl font-light">Categorías</h1></a></div>
                        <div className='w-fit flex items-center py-4'><a href="#Ofertas"><h1 className="text-xl font-light">Ofertas</h1></a></div>
                        <div className='w-fit flex items-center py-4'><a href="#Contacto"><h1 className="text-xl font-light">Contacto</h1></a></div>
                      </div>
                      <div className="flex gap-4 top-76 ps-6">
                        <div className='hover:bg-gray-200 p-2 rounded-md flex items-center'>
                          <img src={zoom} alt="zoom" className="w-5 h-5 " />
                        </div>
                        <div className='hover:bg-gray-200 p-2 rounded-md flex items-center'>
                          <img src={user} alt="user" className="w-5 h-5 " />
                        </div>
                        <div className='hover:bg-gray-200 p-2 rounded-md flex items-center'>
                          <img src={cart} alt="cart" className="w-5 h-5 " />
                        </div>
                      </div>
                  </div>
              </div>
          }
        </header>
          <section id='Inicio'>
            <Hero/>
          </section>
          <section id='Productos'>
            <Products/>
          </section>
          <section id='Categorías'>
            <Categories/>
          </section>
          <section id='Contacto' className='w-screen mt-12 grid items-center place-items-center bg-gray-900 text-gray-400 pt-24'>
            <Contact/>
            <div className="w-[90%] border-b-[.2px] pb-4 border-gray-600"></div>
            <h1 className='my-12 px-4 text-center'>© {new Date().getFullYear()} TechStore. Todos los derechos reservados. | <a href="">Política de Privacidad</a> | <a href="">Términos de Servicio</a>
            </h1>
          </section>
    </div>
  )
}
