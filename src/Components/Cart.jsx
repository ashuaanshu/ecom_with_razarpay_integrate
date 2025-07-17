import React, { useContext, useState } from 'react'
import { GlobalContext } from './Context/GlobalContext'
import { Link } from 'react-router-dom'
import Popup from './Popup';
import { useParams } from 'react-router-dom';

const Cart = () => {

  const { id } = useParams();
  
  const [showPopup, setShowpopup] = useState(false)

  const abc = () => {
    setShowpopup(true)
  }

  const { cartt } = useContext(GlobalContext)

  if (!cartt || cartt.length === 0) {
    return (
      <div className="text-center m-10">
        <h2 className="text-2xl font-semibold">🛒 Your basket is empty</h2>
        <Link to="/" className="text-blue-600 underline">Go back to products</Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-medium text-center m-4">--- YOUR BASKET ---</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cartt.map((product, index) => (
          <div key={index} className="border shadow p-4 rounded hover:shadow-xl">
            <img src={product.images[0]} alt={product.title} className="h-48 object-contain mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">₹ {product.price}</p>
          </div>
        ))}
      </div>

      <div className="text-xl font-medium text-center m-4">
        

        <button className="bg-blue-600 w-30 p-2 rounded text-white active:scale-90" onClick={abc}>Pay</button>
        {showPopup && <Popup onClose={() => setShowpopup(false)} />}
      </div>
    </div>
  )
}

export default Cart
