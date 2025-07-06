import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdCart } from "react-icons/io"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className='bg-gradient-to-br from-sky-300 to-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>

          {/* Logo */}
          <div className='flex items-center'>
            <Link to='/'>
              <img src='/store.png' alt='Store Logo' className='h-12' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 items-center text-xl font-semibold'>
            <Link to='/shop' className='hover:text-blue-600'>Shop</Link>
            <Link to='/cart' className='text-3xl hover:text-blue-600'><IoMdCart /></Link>
            <Link to='/login' className='hover:text-blue-600'>Login</Link>
            <Link to='/contact' className='hover:text-blue-600'>Contact Us</Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden flex flex-col space-y-4 py-4 text-lg font-medium'>
            <Link to='/shop' className='hover:text-blue-600' onClick={toggleMenu}>Shop</Link>
            <Link to='/cart' className='text-2xl hover:text-blue-600' onClick={toggleMenu}><IoMdCart /></Link>
            <Link to='/login' className='hover:text-blue-600' onClick={toggleMenu}>Login</Link>
            <Link to='/contact' className='hover:text-blue-600' onClick={toggleMenu}>Contact Us</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
