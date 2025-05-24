import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Header from './componestes/Header'
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Modelos from './componestes/Modelos'
//import MobileHeader from './componestes/HeaderMobile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Modelos />
      {/* O resto da sua página aqui */}
    </div>
  
    </>
  )
}

export default App
