import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home2 = () => {

    const [product, setProduct] = useState([])
     const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            //  axios.get(`https://api.escuelajs.co/api/v1/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log("error: ", err));
    }, [])

    // const sortedProduct = [...product].sort((a,b)=>{
    //     if (sortOption === "low-to-high") return a.price - b.price;
    //     if (sortOption === "high-to-low") return b.price - a. price;
    //     return 0;
    // })

    return(
        <div>

            {/* <div className="flex justify-end px-10">
  <select
    className="border px-4 py-2 rounded shadow mb-5"
    onChange={(e) => setSortOption(e.target.value)}
    value={sortOption}
  >
    <option value="">Sort by Price</option>
    <option value="low-to-high" >Low to High</option>
    <option value="high-to-low">High to Low</option>
  </select>
</div> */}

            <div  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:p-6 lg:p-10">
                {product.map((items)=>(
                    <div key={items.id} className='shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 '>
                        <Link to={`/product/${items.id}`}>
                        <div className='flex flex-col items-center relative group'>
                            <div className='relative h-60 w-50 '>
                        <img src={items.image} className='h-full pt-5  w-full object-contain absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0' />

                        <img
          src={items.image}
          alt="hovered"
          className="h-full w-full object-contain absolute top-0 left-0 transition-all duration-2000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
        />


                        </div>
                        <p className='font-bold ml-4 mt-5'>{items.title.split(' ').slice(0,4).join(' ')+(items.title.split(' ').length>8 ? '...' : ' ')}</p>
                        <p className='ml-4 mb-2  font-semibold'>Price: ₹{items.price}</p>
                        <p className='absolute bottom-20 right-22'>
                            <button className='relative group text-white text-center w-full justify-center border px-5 opacity-0 bg-purple-500 group-hover:opacity-100 transition-300 transition-opacity'>
                                <span className='absolute left-0 right-0 z-0 w-0 h-full bg-amber-400 transition-all duration-300 group-hover:w-full'></span><span className='relative z-0'>Buy now</span></button>
                        </p>

                         {/* <p className=' relative group border text-center h-10 w-full justify-center items-center flex font-bold bg-purple-500 bottom-0 opacity-0  group-hover:opacity-100 transition-300 transition-opacity'>
                                        <span className='absolute left-0 top-0 z-0 h-full w-0 bg-amber-400 transition-all duration-300 group-hover:w-full'></span><span className='relative z-0'>Buy Now</span></p> */}

                        
                        </div>
                        </Link> </div>

                        
                ))}
            </div>
        </div>

    )
}

export default Home2


