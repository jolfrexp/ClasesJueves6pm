import Hooks from './components/hooks'
import CambiarColor from './components/cambiarColor'
import { createContext } from 'react'
import Home from './components/home'
export let color  = createContext()
// import './App.css'
import './assets/css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Home></Home>
      <color.Provider value = "claro">
      <Hooks/>
      <CambiarColor/>
      </color.Provider>
    </>
  )
}

export default App