import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Replace this with real auth logic
  const isLoggedIn = true;
  const userName = 'Profile';

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className="bg-gradient-to-br from-sky-300 to-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          
          <Link to="/">
            <img src="/store.png" alt="Logo" className="h-12" />
          </Link>

          <div className="hidden md:flex flex-1 mx-10">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border rounded-l-lg focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
              Search
            </button>
          </div>

         
          <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
            <Link to="/shop" className="hover:text-blue-600">Shop</Link>
            <Link to="/cart" className="text-3xl relative hover:text-blue-600">
              <IoMdCart />
              
            </Link>

            
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <FaUserCircle className="text-2xl" />
                {isLoggedIn ? userName : 'Login / Signup'}
              </button>

              
              {showDropdown && isLoggedIn && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Your Account</Link>
                  <Link to="/order" className="block px-4 py-2 hover:bg-gray-100">Your Order</Link>
                  <Link to="/address" className="block px-4 py-2 hover:bg-gray-100">Saved Address</Link>
                   <Link to="/login" ><button className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">
                    Login
                  </button> </Link>
                </div>
              )}

              
              {showDropdown && !isLoggedIn && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                  <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Signup</Link>
                </div>
              )}
            </div>
          </div>

         
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 text-lg font-medium">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border px-3 py-2 rounded"
            />
            <Link to="/shop" onClick={toggleMenu} className="hover:text-blue-600">Shop</Link>
            <Link to="/cart" onClick={toggleMenu} className="hover:text-blue-600">Cart</Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" onClick={toggleMenu}>Your Account</Link>
                <Link to="/orders" onClick={toggleMenu}>Your Orders</Link>
                <Link to="/address" onClick={toggleMenu}>Saved Address</Link>
                <button onClick={toggleMenu} className="text-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={toggleMenu}>Login</Link>
                <Link to="/signup" onClick={toggleMenu}>Signup</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
