
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header , Footer } from './components'
import { AllRoutes } from './routes/AllRoutes'
function App() {


  return (
    <div className="App dark:bg-dark">
      <Header />
        <main>  
          <AllRoutes />
        </main>
      <Footer />  
      
    </div>
  )
}

export default App
