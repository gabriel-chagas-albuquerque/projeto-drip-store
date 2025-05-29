import { FaSearch, FaShoppingCart } from "react-icons/fa";
import images from '../assets/images.jsx'
import 'primeicons/primeicons.css';
import React from 'react';
//import '../style/header.css'
import { PiMagnifyingGlass, PiShoppingCartSimple } from "react-icons/pi";

const Header = () => {
    return ( 
        <>
        <header className="w-ful border-b border-gray-100 font-sans bg-white">
            <div className="max-w-[1200px] mx-auto pt-2.5 flex justify-between items-center">
                {/* seção de logo */}
                <div className="flex items-center gap-2.5">
                    <img src={images.Group} alt="logo text"/>
                    <img src={images.logo} alt="logo" />
                </div>

                {/* barra de pesquisar */}
               
                <div className="flex bg-gray-200 p-[10px] rounded-md">
                <input type="text" placeholder="Pesquisar Produtos" className="focus:outline-none focus:ring-0 focus:border-none w-[500px] h-[40px]"/>
                <img src={images.lupa}/>
                </div>
               
               

                {/* area de conta */}
                <div className="flex items-center gap-4">
                    <p><a href="#" className="text-gray-800 underline text-base mr-2.5">Cadastre-se</a></p>
                    <button className="w-[114px] h-10 bg-[#c92071] text-while border-none py-1.5 px-4 rounded-[20px] cursor-pointer mr-5">Entra</button>
                    <FaShoppingCart className="text-[#d60074] text-[1.4rem] cursor-pointer"/>
                </div>
            </div>
            {/* menu */}
            <nav className="flex gap-5 py-2.5 px-5 text-sm max-w-[1200px] mx-auto">
                <a href="#" className="text-[#C92071] font-bold relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-0.5 after:bg-[#C92071]">Home</a>
                <a href="#" className="text-gray-600 no-underline relative hover:text-[#C92071] hover:font-bold after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-[#C92071] after:transition-all  after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-full">Produtos</a>
                <a href="#" className="text-gray-600 no-underline relative hover:text-[#c92071] hover:font-bold after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-[#c92071] after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-full">Categoria</a>
                <a href="#" className="text-gray-600 no-underline relative hover:text-[#c92071] hover:font-bold after:content-[''] after:absolute after:left-1/2 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-[#c92071] after:transition-all after:duration-300 after:ease-in-out after:-translate-x-1/2 hover:after:w-full">Meus Pedidos</a>
            </nav>

        </header>
        
        </>
       
        
     );
}
 
export default Header;