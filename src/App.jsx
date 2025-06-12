import './App.css'
import { HomeSlidesContext } from './contexts/HomeSlidesContext'
import AppRoutes from './routes/Routes'

function App() {
  return (
    <div className='flex justify-center'>
      <HomeSlidesContext>
        <AppRoutes />
      </HomeSlidesContext>
    </div>
  )
}

export default App
