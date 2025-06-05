import React, { useState } from 'react'
//import '../style/HeaderMobile.css' //Estilos do cabeçalho mobile
//import '../style/MenuMobile.css'// Estilos do menu lateral
import images from '../assets/images.jsx' //Importação de imagens
import { Link, useLocation } from "react-router-dom";
import 'primeicons/primeicons.css';
import { Link2OffIcon, Menu, Search, ShoppingCart } from "lucide-react";
import { FaShoppingCart } from 'react-icons/fa';

//ola

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false) //Estado do menu lateral aberto ou fechado
  const [Pesquisar, setPesquisar] = useState(false) //Estado da barra de pesquisa visível ou oculta


  const location = useLocation()
const local = (path) => location.pathname === path
const ativeLinks = "text-[#c92071] font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-0.5 after:bg-[#c92071]";
const desativeLinks = "text-gray-600 no-underline relative hover:text-[#c92071] hover:font-bold after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-[#c92071] after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-full";


  return ( 
    <> 
     {/* menu lateral */}
     {menuOpen && (
<div className='fixed top-0 left-0 w-full h-full bg-opacity-50 z-50 lg:hidden'
  onClick={() =>  setMenuOpen(false)}/>
     )}
     <header className='w-full border-b border-gray-100 font-sans bg-white relative z-50'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='flex justify-between items-center px-4 lg:px-0 py-3 lg:pt-2.5'>
          {/* botão Mobile */}
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={24} className='text-gray-700'></Menu>
          </button>
          {/* LOgo Header*/}
          <div className='flex items-center gap-2.5'>
            <div className='hidden lg:flex items-center gap-2.5'>
             <img src={images.Group}></img>
             <img src={images.logo}></img>
            </div>
            {/* logo Mobile*/}
            <div className='lg:hidden flex-1 flex justify-center'>
              <img src={images.logoMobile} alt='logo digital' />
            </div>
          </div>
          {/*barra pesquisar */}
          <div className='hidden lg:flex bg-gray-200 p-[10px] rounded-md'>
            <input type='text' placeholder='Pesquisar Produtos' className='focus:outline-none focus:ring-0 focus:border-none w-[500px] h-[40px] bg-transparent' />
            <img src={images.lupa} alt='lupa de buscar' />
          </div>
          {/*botões pc e mobile */}
         <div className='hidden lg:flex items-center gap-4'>
          <p><a href='#' className='text-gray-800 underline text-base mr-2.5'>Cadastre-se</a></p>
          <button className='w-[114px] h-10 bg-[#c92071] text-white border-none py-1.5 px-4 rounded-[20px] cursor-pointer mr-5'>Entrar</button>
          <FaShoppingCart className='text-[#d60074] text-[1.4rem] cursor-pointer' />
         </div>
         <div className='flex items-center gap-3 lg:hidden'>
          <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors' onClick={() => setPesquisar(!Pesquisar)}>
            <Search size={24} className='text-gray-700' />
          </button>
          <div className='relative p-2'>
            <ShoppingCart size={24} className='text-gray-700' />
          </div>
         </div>
        </div>
        {/* barra pesquisar  */}
       {Pesquisar && (
        <div className='px-4 pb-3 lg:hidden'>
<input type='text' className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c92071] focus:border-transparent' placeholder='Pesquisar Produtos'/>
           </div>
       )}
<nav className='hidden lg:flex gap-5 py-2.5 px-5 text-sm' >
  <Link to={'/'} className={local('/') ? ativeLinks : desativeLinks}>Home</Link>
  <Link to={'/products'} className={local('/products') ? ativeLinks : desativeLinks}>Produtos</Link>
  <Link to={'/'} className={local('') ? ativeLinks : desativeLinks}>Categoria</Link>
  <Link to={'/'} className={local('') ? ativeLinks : desativeLinks}>Meus Pedidos</Link>
</nav>
     
</div>
     </header>
     {/* leteral*/}
     <aside className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <nav className='p-6'>
        <h3 className='text-lg font-bold text-gray-800 mb-4 font-inter'>Páginas</h3>
        <ul className='space-y-3'>
          <li>
            <Link to={'/'} className={local('/') ? ativeLinks : 'text-gray-600 text-base block py-2 font-inter hover:text-[#c92071] transition-colors'} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to={'/products'} className={local('/products') ? ativeLinks : 'text-gray-600 text-base block py-2 font-inter hover:text-[#c92071] transition-colors'} onClick={() => setMenuOpen(false)}>Produtos</Link>
          </li>
          <li>
             <Link to={'/'} className={local('') ? ativeLinks : 'text-gray-600 text-base block py-2 hover:text-[#c92071] transition-colors'} onClick={() => setMenuOpen(false)}>Categorias
          </Link>
          </li>
          <li>
            <Link to={'/'} className={local('') ? ativeLinks : 'text-gray-600 text-base block py-2 hover:text-[#c92071] transition-colors'} onClick={() => setMenuOpen(false)}>Meus Pedidos
          </Link>
         </li>
        </ul>
        <div className='mt-8 space-y-0'>
          <hr className='border-gray-300 mb-4'></hr>
          <button className='w-full  bg-[#c92071] text-white py-3 px-4 rounded-lg font-medium hover:bg[#b01d63] transition-colors mb-5 cursor-pointer'>Entrar</button>
          <a href='#' className='block text-center text-[#c92071] font-medium underline hover:text-[#b01d63] transition-colors '>Cadastre-se</a>
        </div>
      </nav>

     </aside>
     
    
    </>
   );
}

export default Header;
