import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Cart from './Cart/Cart.jsx';
import PlaceOrder from './PlaceOrder/PlaceOrder.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginPopup from '../components/LoginPopup/LoginPopup.jsx';

const App = () => {

const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin } />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  ); 
}

export default App
