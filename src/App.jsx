import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Components/Shop'
import Home2 from './Components/Hero/Home2'
import Footer from './Components/footer/Footer'
import Login from './Components/Auth/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import Hero from './Components/Hero/Hero'
import Strip from './Components/Hero/Strip'
import './App.css'
import Contactus from './Components/Contact/Contactus'



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Hero />
        <Strip />
        <h1 className='text-center text-2xl font-bold'>--- Product ---</h1>
          <Home2  />
        </>} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contactus />} />

        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/shop' element={<Shop  />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App