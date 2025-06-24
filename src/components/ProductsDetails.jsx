import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import images from '../assets/images'
import { useState } from 'react';

const ProductsDetails = () => {

    const [selecionar, setSelecionar] = useState(41)
    const [selecionarCor, setSelecionarCor] = useState('red')
    const [carrinhoSapato, setCarrinhoSapato] = useState(0)

const tamanho = [39, 40, 41, 42, 43]
const colors = [
    { name: 'cyan', class: 'bg-cyan-400' },
    { name: 'red', class: 'bg-red-500' },
    { name: 'gray', class: 'bg-gray-600' },
    { name: 'purple', class: 'bg-purple-500' }
  ]

  const imageArray = Object.values(images)
  const imagesKey = Object.keys(images)

  const proxImage = () => {
    setCarrinhoSapato((prox) => (prox + 1) % imageArray.length)
  }

  const anteimage = () => {
    setCarrinhoSapato((prox) => (prox - 1 + imageArray.length) % imageArray.length)
  }

    return ( <>
    <div className='min-h-screen bg-gray-50'>
        {/*mobile */}
        <div className='block lg:hidden'>
            <div className='bg-white'>
                <div className='relative bg-gradient-to-br  aspect-square'>
                    <button className='absolute left-4 top-1/2 -translate-y-1 bg-white hover:bg-white/80 rounded-full p-2 shadow-lg z-10 transition-all' onClick={anteimage}>
                    <ChevronLeft className="w-5 h-5 text-gray-700"/>
                    </button>

                    <img src={imageArray[carrinhoSapato]} alt='imagem de sapato' className='w-full h-full object-contain p-8'/>

                    <button className='absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-white/80 rounded-full p-2 shadow-lg z-10 transition-all' onClick={proxImage}>
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button> 
                </div>
                
        <div className="flex gap-2 p-4 overflow-x-auto">
            {imageArray.map((thumb, index) => (
              <button
                key={index} onClick={() => setCarrinhoSapato(index)} className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  carrinhoSapato === index ? 'border-purple-400' : 'border-gray-200'
                }`}
              >
                <img 
                  src={thumb} 
                  alt={`Thumbnail ${imagesKey[index]}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
                    {/* info produtos */}
                    <div className='p-4'>
                        <h1 className='text-xl font-bold text-gray-900 mb-2'>Tênis Nike Recolution 6 Next Nature Masculino</h1>
                        <div className='text-sm text-gray-600 mb-2'> Casual | Nike | MA-2024/001</div>
                    
                    <div className='flex items-center gap-2 mb-4'>
                        </div>
                        <div className='flex text-yellow-400'>
                            {[...Array(5)].map((_, i) => (
                                 <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                            <span className='bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium'> 4.7/5</span>
                                <span className='text-xs text-gray-500'>(90 avaliações)</span>
                        </div>
                        <div className='mb-6'>
                            <div className='flex items-baseline gap-2'>
                                <span className='text-2xl fron-bold text-gray-900'>R$ 219</span>
                                <span className='text-sm text-gray-600'>,00</span>
                                <span className='text-sm text-gray-600'></span>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h3 className='font-semibold text-gray-900 mb-2'>Descrição de produtos</h3>
                            <p className='text-sm text-gray-600 leading-relaxed'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus consectetur consequuntur reprehenderit, hic fuga labore delectus aut dolores odio expedita odit sunt perferendis? Fugiat optio iste a voluptates voluptas.</p>
                        </div>
                        <div className='mb-6'>
                      <h3 className='font-semibold text-gray-900 mb-3'>Tamanho</h3>
                     <div className="flex gap-2">
                    {tamanho.map((tamanhos) => (
                  <button
                    key={tamanhos}
                    onClick={() => setSelecionar(tamanho)}
                    className={`w-12 h-12 rounded-lg border-2 font-medium transition-all ${
                      selecionar === tamanhos
                        ? 'border-pink-500 bg-pink-500 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}>
                           {tamanhos}
                         </button>
                            ))}
                        </div>
                        </div>
                        <div className='mb-8'>
                             <div className="mb-8">
                        <h3 className="font-semibold text-gray-900 mb-3">Tamanho</h3>
                        <div className="flex gap-3">
                         {colors.map((color) => (
                        <button
                         key={color.name}
                          onClick={() => setSelecionarCor(color.name)}
                          className={`w-8 h-8 rounded-full ${color.class} border-2 transition-all ${
                          selecionarCor === color.name
                        ? 'border-gray-400 scale-110'
                        : 'border-gray-200'
                             }`}/>
                                 ))}
                            </div>
                          </div>
                          <button className='w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 rounded-lg transition-colors cursor-pointer'> Comprar</button>
                        </div>
                    </div>
                </div>
                </div>
                {/*Computador */}
                <div className='hidden lg:block'>
                    <div className='max-w-6xl bg-[#F9FAFB] overflow-hidden'>
                        <div className='flex'>
                            <div className='flex-1 p-8'>
                                <div className='relative bg-gradient-to-br   mb-6 aspect-square '>
                                    <button className='absolute left-6 top-1/2 -translate-y-1/2 rounded-full p-3  z-10 transition-all cursor-pointer' onClick={anteimage}>
                                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                                    </button>
                                    <img src={imageArray[carrinhoSapato]} alt='Nike Revolution 6' className=' relative w-full h-full  object-contain p-8'/>
                                    <button className='absolute right-6 top-1/2 -translate-y-1/2 rounded-full p-3  z-10  transition-all cursor-pointer' onClick={proxImage}>
                                    <ChevronRight className="w-6 h-6 text-gray-700" />
                                    </button>
                                </div>
                                <div className='flex gap-3 justify-center'>
                                     {imageArray.map((thumb, index) => (
                                    <button
                                   key={index} onClick={() => setCarrinhoSapato(index)} className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                    carrinhoSapato === index ? 'border-purple-400' : 'border-gray-200'
                                    }`}>
                                    <img src={thumb} alt={`Thumbnail ${imagesKey[index]}`}className="w-full h-full object-cover cursor-pointer"/></button>
                                    ))}
                                </div>
                            </div>
                            <div className='flex-1 p-8'>
                                <h1 className='text-3xl font-bold text-gray-900 mb-3'>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                                <div className='text-gray-600 mb-3'>Casual | Nike | MA-2024/001</div>
                            
                            <div className='flex items-center gap-3 mb-6'>
                        <div className='flex text-yellow-400'>
                                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                           ))}
                                </div>
                                <span className='bg-orange-100 text-orange-800 px py-1 rounded-full text-sm font-medium'>4.7/5</span>
                                <span className='text-sm text-gray-500'>(90 avaliações)</span>
                            </div>
                       
                        <div className='mb-8'>
                            <div className='flex items-baseline gap-3'>
                                <span className='text-4xl font-bold text-gray-900'>R$ 219</span>
                                <span className='text-lg text-gray-600'>,00</span>
                                <span className='text-lg text-gray-400'>R$ 299,00</span>
                            </div>
                        </div>
                        <div className='mb-8'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-3'>Descrição de produtos</h3>
                            <p className='text-gray-600 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex animi quo dolores vero consequatur quae voluptates possimus id ipsam velit impedit laboriosam neque, distinctio perspiciatis quas autem. Beatae, eum quas?</p>
                        </div>
                        <div className='mb-8'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4'>Tamanho</h3>
            <div className="flex gap-3">
                  {tamanho.map((tamanhos) => (
                    <button
                      key={tamanhos}
                      onClick={() => setSelectedSize(tamanhos)}
                      className={`w-14 h-14 rounded-xl border-2 font-medium transition-all cursor-pointer ${
                        selecionar === tamanhos
                          ? 'border-pink-500 bg-pink-500 text-white'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}>
                             {tamanhos}
                           </button>
                            ))}
                         </div>
                        </div>
                        <div className='mb-10'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-4'></h3>
                       <div className="flex gap-4">
                      {colors.map((color) => (
                        <button
                           key={color.name}
                          onClick={() => setSelecionarCor(color.name)}
                          className={`w-10 h-10 rounded-full ${color.class} border-2 transition-all cursor-pointer ${
                          selecionarCor === color.name
                          ? 'border-gray-400 scale-110'
                          : 'border-gray-200'
                            }`}/>
                           ))}
                         </div>
                        </div>
                        <button className='w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 rounded-xl text-lg transition-colors cursor-pointer'>Comprar</button>
                        </div>
                         </div>
                    </div>
                </div>
            </div>
        
    
    </> );
}
 
export default ProductsDetails;