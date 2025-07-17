import React from 'react';

const OrderDetails = () => {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">Title</h1>

      {/* Price */}
      <div className="mb-4">
        <label className="block font-medium">Price</label>
        <input type="text" className="border rounded-md p-2 w-full" />
      </div>

      {/* Order ID */}
      <div className="mb-4">
        <label className="block font-medium">Order Id</label>
        <input type="text" className="border rounded-md p-2 w-full" />
      </div>

      {/* Delivery Address and Image Section */}
      <div className="flex">
        {/* Left Box */}
        <div className="border rounded-md p-4 flex-1 mr-4">
          <h2 className="font-semibold mb-2">Delivery address</h2>
          <input type="text" className="border rounded-md p-2 w-full" />
        </div>

        {/* Right Box (Image Placeholder) */}
        <div className="border rounded-md w-1/4 h-48 bg-gray-300">
          {/* Placeholder for image */}
        </div>
      </div>

      {/* Icons/Buttons Section */}
      <div className="flex mt-4">
        <button className="border rounded-md p-2 mr-2">🔄</button>
        <button className="border rounded-md p-2">➕</button>
      </div>
    </div>
  );
};

export default OrderDetails;
