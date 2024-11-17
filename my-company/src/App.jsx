import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
