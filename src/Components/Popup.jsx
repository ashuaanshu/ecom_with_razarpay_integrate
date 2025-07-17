import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GlobalContext } from './Context/GlobalContext';

const Popup = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { product: allProducts } = useContext(GlobalContext);
  const product = allProducts.find((item) => item._id === id);

  if (!product) return <p className="text-center text-red-500">Product not found...</p>;

  useEffect(() => {
    console.log("Popup component loaded");
  }, []);

  const HandlePayment = async (e) => {
    e.preventDefault();
    console.log("Buy now clicked");

    if (!name || !email || !mob || !address || !pincode) {
      alert('Please fill all fields');
      return;
    }

    if (mob.length !== 10) {
      alert('Mobile number should be 10 digits');
      return;
    }

    if (pincode.length !== 6) {
      alert('Pincode should be 6 digits');
      return;
    }

    setLoading(true);

    try {
      // Step 1: Get Razorpay Key
      const { data: keyRes } = await axios.get("http://localhost:8000/api/order/get-key");
      const razorpayKey = keyRes.key;

      // Step 2: Create Order
      const { data: orderRes } = await axios.post("http://localhost:8000/api/order/create", {
        amount: product.price * 100
      });

      if (!orderRes.success) throw new Error('Failed to create order');

      const { orderId, amount, currency } = orderRes;

      // Step 3: Razorpay Checkout
      const options = {
        key: razorpayKey,
        amount,
        currency,
        name: "Your Store Name",
        description: product.title,
        image: product.image || product.images?.[0],
        order_id: orderId,
        handler: async function (response) {
          try {
            const saveRes = await axios.post("http://localhost:8000/api/order/save-order", {
              orderId,
              productId: product._id,
              productTitle: product.title,
              productImage: product.image || product.images?.[0],
              amount: amount / 100,
              currency,
              name,
              email,
              mobile: mob,
              address,
              pincode,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (saveRes.data.success) {
              alert("✅ Payment successful and order saved!");
              onClose();
            } else {
              throw new Error("Failed to save order");
            }
          } catch (err) {
            console.error("Error saving order:", err);
            alert("Payment successful but saving failed. Please contact support.");
          }
        },
        prefill: {
          name,
          email,
          contact: mob,
        },
        theme: { color: "#3399cc" },
        modal: {
          ondismiss: () => setLoading(false)
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment initiation failed:", err);
      alert("Something went wrong initiating payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-amber-200 w-full max-w-5xl rounded-2xl shadow-lg grid lg:grid-cols-2 md:grid-cols-1 gap-6 p-4">
        <div className="bg-white rounded-2xl flex justify-center items-center p-4">
          <img
            src={product.image || product.images?.[0]}
            alt="product"
            className="h-[350px] sm:h-[250px] object-contain"
          />
        </div>

        <div className="relative w-full max-h-[90vh] overflow-y-auto p-2">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-red-600 font-bold text-2xl hover:scale-125 transition-transform"
          >
            ×
          </button>

          <h2 className="text-2xl text-center underline font-serif mb-4 mt-6">Order Details</h2>

          <form className="space-y-3">
            <p className="text-xl font-extrabold mb-2">{product.title}</p>

            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="number"
              placeholder="Enter mobile number"
              value={mob}
              onChange={(e) => setMob(e.target.value.slice(0, 10))}
              className="w-full border p-2 rounded"
              required
            />

            <textarea
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="number"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value.slice(0, 6))}
              className="w-full border p-2 rounded"
              required
            />

            <button
              onClick={HandlePayment}
              disabled={loading}
              className="w-full mt-4 border bg-blue-800 text-white font-bold p-3 rounded-xl hover:bg-amber-400 hover:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? 'Processing...' : `Pay ₹${product.price}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
