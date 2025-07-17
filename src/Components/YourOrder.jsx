import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/order/history/mayipip640@endibit.com`);
        console.log("Order response:", res.data);
        setOrders(res.data.orders); // ✅ fix here
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full py-2 px-4 w-full"
        />
      </div>

      {orders?.map((order) => (
        <div
          key={order._id}
          className="border-2 border-black p-4 mb-4 bg-white rounded-md"
        >
          <div className="flex justify-between text-sm font-medium">
            <span>Order Placed: {new Date(order.createdAt).toLocaleDateString()}</span>
            <span>Price: ₹{(order.amount / 100).toFixed(2)}</span>
            <span>Status: {order.status}</span>
          </div>
          <hr className="my-2" />
          <div className="flex gap-4 items-center">
            <img
              src={order.productImage}
              alt="product"
              className="h-24 w-24 object-cover"
            />
            <p className="font-semibold">{order.productTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourOrder;
