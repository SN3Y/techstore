import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

export default function Contact() {
  return (
    <div className='grid place-items-center w-[90%] bg-gray-900 grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:max-w-7xl gap-6'>
              <div className='w-full p-2 h-full justify-between'>
                <h1 className='text-3xl font-bold text-white mb-8'>TechStore</h1>
                <p className='text-xl mb-6'>
                Tu tienda de confianza para componentes de hardware de alta calidad. Ofrecemos los mejores productos con garantía y soporte técnico especializado.
              </p>
              <div className='flex gap-4'>
                  <img src={facebook} alt="facebook" className='w-2' />
                  <img src={x} alt="x" className='w-4' />
                  
              </div>
            </div>
            <div className="w-full p-2 h-full justify-between">
              <h1 className='text-2xl text-white font-semibold mb-8'>
                Enlaces Rápidos
              </h1>
              <a href="#Inicio"><h1 className="text-lg font-light mb-2 hover:text-white">Inicio</h1></a>
              <a href="#Productos"><h1 className="text-lg font-ligh mb-2 hover:text-white">Productos</h1></a>
              <a href="#Categorias"><h1 className="text-lg font-light mb-2 hover:text-white">Categorías</h1></a>
              <a href="#Ofertas"><h1 className="text-lg font-light mb-2 hover:text-white">Ofertas</h1></a>
              <a href="#Contacto"><h1 className="text-lg font-light hover:text-white">Contacto</h1></a>
            </div>
            <div className="w-full p-2 h-full justify-between">
              <h1 className='text-2xl text-white font-semibold mb-8'>
                Categorías
              </h1>
              <a href=""><h1 className="text-lg font-light mb-2 hover:text-white">Procesadores</h1></a>
              <a href=""><h1 className="text-lg font-ligh mb-2 hover:text-white">Tarjetas Gráficas</h1></a>
              <a href=""><h1 className="text-lg font-light mb-2 hover:text-white">Memoria RAM</h1></a>
              <a href=""><h1 className="text-lg font-light mb-2 hover:text-white">Motherboards</h1></a>
              <a href=""><h1 className="text-lg font-light hover:text-white">Almacenamiento</h1></a>
            </div>
            <div className="w-full p-2 h-full items-start">
              <h1 className='text-2xl text-white font-semibold mb-8'>
                Contacto
              </h1>
              <div className='grid gap-2'>
                <div className="flex gap-2 items-center">
                <img src={location} alt="location" className='w-4 h-5' />
                123 Tech Street, Ciudad, Bogotá
                </div>
                <div className="flex gap-2 items-center">
                  <img src={phone} alt="phone" className='w-4 h-5' />
                  + 1 (555) 123-4567
                </div>
                <div className="flex gap-2 items-center">
                  <img src={mail} alt="mail" className='w-5 h-4' />
                  info@techstore.com
                </div>
              </div>
            </div>
            </div>
  )
}
