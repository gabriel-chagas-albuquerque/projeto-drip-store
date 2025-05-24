import React, { useState } from 'react'
//import '../style/HeaderMobile.css' //Estilos do cabeçalho mobile
//import '../style/MenuMobile.css'// Estilos do menu lateral
import images from '../assets/images.jsx' //Importação de imagens
import 'primeicons/primeicons.css';
import { PiMagnifyingGlass, PiShoppingCartSimple } from "react-icons/pi";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { FiMenu } from "react-icons/fi";
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false) //Estado do menu lateral aberto ou fechado
  const [Pesquisar, setPesquisar] = useState(false) //Estado da barra de pesquisa visível ou oculta
  return ( 
    <> 
     {menuOpen && (
      <div className='fixed  top-0 left-0  w-full h-[600px] bg-gray-200 bg-opacity-50 z-40' onClick={() => setMenuOpen(false)}></div>
    )}
   <header className='w-full bg-white shadow-sm border-b border-gray-100 relative z-50'>
    <div className='flex items-center justify-between px-4 py-3'>
      <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors' onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={24} className="text-gray-700"/>
      </button>
      <div className='flex-1 flex justify-center'>
       
          <img src={images.logoMobile} alt='logo'/>
      </div>
    
    <div className='flex items-center gap-3'>
      <button onClick={() => setPesquisar(!Pesquisar)} className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
        <Search size={24} className='text-gray-700'/>
      </button>
      <div className='relative p-2'>
        <ShoppingCart size={24} className='text-gray-700'/>
        <span className='absolute -top-1 -right-1  text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'></span>
      </div>
    </div>
    </div>
    {Pesquisar && (
      <div className='px-4 pb-3'>
        <input type='text' className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c92017] focus:border-transparent' placeholder='Pesquisar Produtos'></input>
      </div>
      )}
      
      {/* menu lateral mobile */}
      <aside className={`fixed top-0 left-0 h-200 w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className='p-6'>
          <h3 className='text-lg font-bold text-gray-800 mb-4 font-inter'>Páginas</h3>
          <ul className='space-y-3'>
            <li>
              <a href='#' className="text-[#c92071] font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-0.5 after:bg-[#C92071]" >Home</a>
            </li>
            <li>
              <a href='#' className='text-gray-600 text-base block py-2 font-inter hover:text-[#c92071] transition-colors'>Produtos</a>
            </li>
            <li>
              <a href='' className='text-gray-600 text-base block py-2 hover:text-[#c92071] transition-colors'>Categorias</a>
            </li>
            <li>
              <a href='#' className='text-gray-600 text-base block py-2 hover:text-[#c92071] transition-colors'>Meus Pedidos</a>
            </li>
          </ul>
          <div className='mt-8 space-y-3'>
            
            <hr className='border-gray-300 mb-4'></hr>
            <button className='w-full bg-[#c92071] text-white py-3 px-4 runded-lg font-medium hover:bg-[#b01d63] transition-colors border border-gray-500'>Entar</button>

            <a href='#' className='block text-center text--[#c92071] font-medium underline hover:text-[#b01d63] transition-colors'>Cadastra-se</a>
          </div>
        </nav>
      </aside>
    {/* fechamento de menu */}
   
   </header>
    </>
   );
}
 
export default MobileHeader;