import React, { useContext, useState } from 'react'
import { GlobalContext } from './Context/GlobalContext'
import { Link } from 'react-router-dom'

const Shop = () => {
  const { product } = useContext(GlobalContext)
  const [sortOption, setSortOption] = useState('')

  const sortedProduct = [...product].sort((a, b) => {
    if (sortOption === "low-to-high") return a.price - b.price
    if (sortOption === "high-to-low") return b.price - a.price
    return 0
  })

  return (
    <div>
      <div className="flex justify-end px-10">
        <select
          className="border px-4 py-2 rounded shadow mb-5"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-4 ms:grid-cols-3 p-10">
        {sortedProduct.map((items) => (
          <div key={items._id} className="shadow-2xl w-70 m-4">
            <Link to={`/product/${items._id}`}>
              <div className="flex flex-col items-center relative group">
                <div className="relative h-60 w-50">
                  <img
                    src={items.images[0]}
                    className="h-full pt-5 w-full object-contain absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0"
                  />
                  <img
                    src={items.images[1]}
                    alt="hovered"
                    className="h-full w-full object-contain absolute top-0 left-0 transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                  />
                </div>
                <p className="font-bold ml-4 mt-5">
                  {items.title.split(' ').slice(0, 4).join(' ') + (items.title.split(' ').length > 8 ? '...' : ' ')}
                </p>
                <p className="ml-4 mb-2 font-semibold">Price: ₹{items.price}</p>
                <p className="absolute bottom-20 right-22">
                  <button className="relative group text-white text-center w-full justify-center border px-5 opacity-0 bg-purple-500 group-hover:opacity-100 transition-300 transition-opacity">
                    <span className="absolute left-0 right-0 z-0 w-0 h-full bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative z-0">Buy now</span>
                  </button>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
