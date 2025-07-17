import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop';
import Home2 from './Components/Hero/Home2';
import Footer from './Components/footer/Footer';
import Login from './Components/Auth/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import Hero from './Components/Hero/Hero';
import Strip from './Components/Hero/Strip';
import './App.css';
import Contactus from './Components/Contact/Contactus';
import { GlobalProvider } from './Components/Context/GlobalContext';
import Cart from './Components/Cart';
import Signup from './Components/Auth/Signup';
import Profile from './Components/Navbar/Profile';
import YourOrder from './Components/YourOrder';
import OrderDetails from './OrderDetail';
// import { CartProvider } from './Components/Context/Contextapi';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Strip />
              <h1 className='text-center text-2xl font-bold'>--- Product ---</h1>
              <Home2 />
            </>

          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/order' element={<YourOrder />} />
          <Route path='/orderdetail' element={<OrderDetails />} />

        </Routes>
        <Footer />
      </Router>
    </GlobalProvider>
  );
};

export default App;