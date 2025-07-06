import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-emerald-900'>
      <div className='flex justify-between flex-wrap px-10 py-6 gap-4 text-gray-300'>
        <div>
          <h1 className='font-bold text-lg'>Address:</h1>
          <p>abx road</p>
          <p>129021</p>
        </div>

        <div>
          <h1 className='font-bold text-lg'>Our Journey</h1>
          <p>Team</p>
          <p>Developer</p>
        </div>

        <div>
          <h1 className='font-bold text-lg'>Discover</h1>
          <p>Sell with us</p>
          <p>ISO certified</p>
        </div>

        <div>
          <h1 className='font-bold text-lg'>Community</h1>
          <p>Blog</p>
          <p>Career</p>
        </div>

        <div>
          <h1 className='font-bold text-lg'>Contact Us</h1>
          <p>Email: ashuaanshu@gmail.com</p>
          <p>Phone: 123456789</p>
        </div>
      </div>

      <div className='text-center bg-red-500 text-white text-md font-bold py-2'>
        © 2025 ashuaanshu. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
