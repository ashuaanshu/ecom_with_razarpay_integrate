import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Popup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const HandlePayment = (e) => {
    e.preventDefault();

    if (!name || !email || !mob || !address || !pincode) {
      alert("Please fill all Details");
      return;
    }

     if (mob.length !== 10) {
    alert("Mobile number must be exactly 10 digits");
    return;
  }

  // Pincode validation
  if (pincode.length !== 6) {
    alert("Pincode must be exactly 6 digits");
    return;
  }

    const option = {
      key: "rzp_test_yJsRctlQOo29tE",
      amount: Math.floor(product.price * 100),
      currency: "INR",
      name: name,
      description: product.title,
      image: product.image,
      handler: function (response) {
        alert("✅ Payment successful! Payment ID: " + response.razorpay_payment_id);
        onClose(); // Optional: Close on success
      },
      prefill: {
        name: name,
        email: email,
        contact: mob,
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new window.Razorpay(option);
    rzp.open();
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleMobileChange = (e) => {
  const value = e.target.value;
  if (value.length <= 10) {
    setMob(value);
  }
};

const handlePincodeChange = (e) => {
  const value = e.target.value;
  if (value.length <= 6) {
    setPincode(value);
  }
};

  if (!product) return <p>Loading....</p>;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 z-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-amber-200 w-full max-w-5xl rounded-2xl shadow-lg grid lg:grid-cols-2 md:grid-cols-1 gap-6 p-4">
        
        {/* Product Image */}
        <div className="bg-white rounded-2xl flex justify-center items-center p-4">
          <img src={product.image} alt="product" className="h-[350px] sm:h-[250px] object-contain" />
        </div>

        {/* Order Form */}
        <div className="relative w-full max-h-[90vh] overflow-y-auto p-2">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-red-600 font-bold text-2xl hover:scale-125 transition-transform"
          >
            ×
          </button>

          <h2 className="text-2xl text-center underline font-serif mb-4 mt-6">Order Details</h2>

          <form className="space-y-3">
            <div>
              <p className="text-xl font-extrabold mb-2">{product.title}</p>
            </div>

            <div>
              <label className="font-semibold font-mono">Name:</label>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold font-mono">Email:</label>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold font-mono">Mobile No:</label>
              <input
                type="number"
                placeholder="Enter mobile number"
                value={mob}
                maxLength={10}
                onChange={(e) => setMob(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold font-mono">Address:</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="font-semibold font-mono">Pincode:</label>
              <input
                type="number"
                placeholder="Enter pincode"
                value={pincode}
                maxLength={6}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full border p-2 rounded "
              />
            </div>

            <div className="pt-5">
              <button
                onClick={HandlePayment}
                className="w-full border bg-blue-800 text-white font-bold p-3 rounded-xl hover:bg-amber-400 hover:scale-95 transition-all"
              >
                Pay: ₹{product.price}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
