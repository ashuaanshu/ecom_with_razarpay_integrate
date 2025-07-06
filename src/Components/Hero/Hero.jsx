import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='min-h-screen py-20 flex justify-start relative'  style={{
            backgroundImage:"url('/banner2.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"    
        }}> 
                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center pt-10 sm:pt-20 md:pt-32 lg:pt-45 pl-4 sm:pl-8 md:pl-12 lg:pl-20 absolute top-0.5 left-0.5'>
                  <p>"Don't just shop, save big! </p> <br />
                  <p>The Big Billion Days sale is live</p>
                  </div>
                <p>
                    <button className='relative overflow-hidden px-4 sm:px-6 py-3 sm:py-5 rounded-xl 
                    top-60 sm:top-70 md:top-80 lg:top-100
                    left-4 sm:left-8 md:left-12 lg:left-20 text-white font-semibold bg-red-500 group'>
                      <span className='absolute left-0 top-0 h-full w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full z-0'></span>
                      <span className='relative z-10'>Today Offer</span></button>
                      </p>
                      </div>
    </div>
  )
}

export default Hero