import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

const Home2 = () => {
  const { product } = useContext(GlobalContext);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:p-6 lg:p-10">
      {product.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">No products available.</p>
      ) : (
        product.map((item) => (
          <div
            key={item._id}
            className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
          >
            <Link to={`/product/${item._id}`}>
              <div className="flex flex-col items-center relative group">
                <div className="relative h-60 w-50">
                  <img
                    src={item.images?.[0]}
                    className="h-full pt-5 w-full object-contain absolute top-0 left-0 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:opacity-0"
                    alt="Front"
                  />
                  <img
                    src={item.images?.[1] || item.images?.[0]}
                    alt="Hover"
                    className="h-full w-full object-contain absolute top-0 left-0 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                  />
                </div>

                <p className="font-bold ml-4 mt-5">
                  {item.title?.split(' ').slice(0, 4).join(' ') +
                    (item.title?.split(' ').length > 8 ? '...' : '')}
                </p>
                <p className="ml-4 mb-2 font-semibold">Price: ₹{item.price}</p>

                <div className="absolute bottom-20 right-22">
                  <button className="relative group text-white text-center w-full justify-center border px-5 opacity-0 bg-purple-500 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute left-0 right-0 z-0 w-0 h-full bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                    <span className="relative z-0">Buy now</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home2;
