import './App.css'

// ini harus diketik untuk mengimport ROUTER 
import { Routes, Route } from 'react-router-dom'

// muncul otomatis
import Home from './pages/home'
import About from './pages/about'



function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }/> {/* ini memberi kan akses untuk ROUTING sesuai dengan PAGES nya */}
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </>
  )
}

export default App
