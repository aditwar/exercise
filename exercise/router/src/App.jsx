import './App.css'
import Navbar from './components/navbar'
import About from './pages/about'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>{/** //! membuat berbagai page dengan halaman itu ujicoba */}
        <Route path="/" element={ <Home /> } /> {/** //? path itu berisi URL yg ada diweb */}
        <Route path="/about" element={ <About />} />
        <Route path="/portfolio" element={ <Portfolio />} />
      </Routes>
    </>
  )
}

export default App
