import { useState } from "react";
let cor = '#db2777'
export default function Resposivo() {
    const [menuFilter, setMenuFilter] = useState(false)

    const opeFilter = () => {
        setMenuFilter(!menuFilter)
    }

    const closeFilter = () => {
setMenuFilter(false)
    }

    

    const Menufilter = () => (
     <>
    {/* menu filtro */}
    <div className="mb-6">
        <h3 className="font-medium text-gray-950 mb-3">Marca</h3>
        <div className="space-y-2">
            <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Adidas</span>
            </label>
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Cariocrias</span>
            </label>
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">X-Sixts</span>
            </label>
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Nike</span>
            </label>
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Puma</span>
            </label>
        </div>
    </div>
    <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">Categorias</h3>
        <div className="space-y-2">
            <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-gray-700">Esporte e Lazer</span>
            </label>
            <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-gray-700">Casual</span>
            </label>
            <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-gray-700">Utilitário</span>
            </label>
            <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-gray-700">Corrida</span>
            </label>
        </div>
    </div>

    <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">Gênero</h3>
        <div className="space-y-2">
            <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Esporte e lazer</span>
            </label>
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Casual</span>
                 </label>
                 <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Utilitário</span>
            </label>
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: cor}}/>
                <span className="ml-2 text-sm text-gray-700">Corrida</span>
            </label>
        </div>
    </div>

    <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-3">Estados</h3>
        <div className="space-y-2">
           <label className="flex items-center">
              <input type="radio" name="estado" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: '#DB2777'}} />
              <span className="ml-2 text-sm text-gray-700">Novo</span>
            </label>
             <label className="flex items-center">
              <input type="radio" name="estado" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-pink-600 accent-pink-600" style={{accentColor: '#DB2777'}} />
              <span className="ml-2 text-sm text-gray-700">Usado</span>
            </label>
        </div>
    </div>
    </>
    )
    

return (
    <div className="min-h-screen bg-gray-50">
        {/* mobile */}
        <div className="lg:hidden px-4 pt-4 pb-4 bg-gray-50">
            <div className="flex gap-3 items-center mb-4">
                <div className="flex-1">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                        <option>Ordenar por: mais relevantes</option> 
                        <option>Menor preço</option>
                        <option>Maior preço</option>
                        <option>Mais vendidos</option>
                    </select>
                </div>
                <button onClick={opeFilter} className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46"></polygon>
                    </svg>
                </button>
            </div>
            <div className="text-gray-600 text-sm">
                 <strong>resultados para "Tenis" </strong> - 389 produtos
            </div>
        </div>

        {/* pc */}
        <div className="hidden lg:block  px-6 py-4 border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-gray-600 text-sm">
                    <strong>resultados para "Tenis" </strong> - 389 produtos
                </div>
                <div className="w-64">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                        <option>Ordenar por: relevantes</option>
                        <option>Menor preço</option>
                        <option>Maior preço</option>
                        <option>Mais vendidos</option> 
                    </select>
                </div>
            </div>
            
        </div>

        <div className="lg:max-w-7xl lg:mx-auto lg:flex">
            <div className="hidden lg:block w-64 bg-white border-r border-gray-200 p-6 w-[308px] h-[720px]">
                <h2 className="text-lg font-medium text-gray-800 mb-6">Filtrar por</h2>
               <Menufilter />
            </div>
        </div>
       

        {/* Mobile Overlay*/}
      {menuFilter && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-600 bg-transparent bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeFilter}
        />
      )}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        menuFilter ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">Filtrar por</h2>
            <button 
              onClick={closeFilter}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
        </div>

        <div className="p-4 overflow-y-auto h-full pb-20">
          <Menufilter />
        </div>
      </div>
      
    </div>
)}
