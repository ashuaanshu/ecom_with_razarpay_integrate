import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaEarthAfrica } from "react-icons/fa6";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { GlobalContext } from './Context/GlobalContext';
import Popup from './Popup';
import Home2 from './Hero/Home2';

const ProductDetail = () => {
    const { id } = useParams();
    const [quan, setQuan] = useState(1);
    const [showPopup, setShowpopup] = useState(false);

    const { product: allProducts, AddToCart } = useContext(GlobalContext);
    const product = allProducts.find((item) => item._id === id);
    const [mainImage, setMainImage] = useState(product?.images?.[0]);

    useEffect(() => {
        if (product?.images?.length > 0) {
            setMainImage(product.images[0]);
        }
    }, [product]);

    if (!product) return <p className="text-center mt-10">Loading....</p>;

    const increment = () => setQuan(quan + 1);
    const decrement = () => quan > 1 && setQuan(quan - 1);
    const abc = () => setShowpopup(true);

    const handleAddToCart = () => {
        AddToCart(product, quan);
    };

    return (
        <div className="p-10">
            {/* Product Display Section */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                {/* Left side: Thumbnails + Main Image */}
                <div className="flex gap-4 items-start">
                    {/* Thumbnails */}
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] scrollbar-thin">
                        {product.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                onClick={() => setMainImage(img)}
                                alt="thumbnail"
                                className={`w-16 h-16 object-contain border-2 rounded cursor-pointer ${mainImage === img ? 'border-blue-500' : 'border-gray-300'}`}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={mainImage}
                            alt="main"
                            className="h-96 w-auto object-contain border rounded"
                        />
                    </div>
                </div>

                {/* Middle Column: Product Info */}
                <div>
                    <p className="text-2xl font-bold px-4 mb-4">{product.title}</p>
                    <div className="flex justify-between px-5">
                        <p className="font-bold">Brand: N/A</p>
                        <p className="font-bold text-md">Rating: {product.rating || 0} ⭐</p>
                    </div>
                    <hr />

                    <p className="font-bold text-2xl p-5">Price: ₹{product.price}</p>
                    <div className="text-lg m-2 break-words w-120">
                        <label className="text-xl font-semibold">Description: </label>
                        {product.description}
                    </div>

                    <p className="text-center font-semibold font-mono text-xl py-4">Quantity</p>
                    <div className="border px-5 py-2 rounded-2xl flex justify-between items-center">
                        <button onClick={decrement} className="text-2xl"><RiSubtractLine /></button>
                        <span className="font-bold text-2xl">{quan}</span>
                        <button onClick={increment} className="text-2xl"><IoMdAdd /></button>
                    </div>

                    <div className="flex gap-6 justify-center items-center py-6">
                        {showPopup && <Popup onClose={() => setShowpopup(false)} />}
                        <button
                            className="border rounded-xl px-6 py-3 bg-blue-600 text-white hover:bg-blue-700"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="border rounded-xl px-6 py-3 bg-green-600 text-white hover:bg-green-700"
                            onClick={abc}
                        >
                            Order
                        </button>
                    </div>
                    <hr />
                </div>

                {/* Right Side: Shipping Info */}
                <div className="space-y-4">
                    <div className="bg-gray-100 flex gap-4 p-3 items-center">
                        <FaEarthAfrica className="text-2xl" />
                        <p className="font-medium">Shipping worldwide</p>
                    </div>
                    <div className="bg-gray-100 flex gap-4 p-3 items-center">
                        <AiOutlineDeliveredProcedure className="text-2xl" />
                        <p className="font-medium">Free 7-day return if eligible</p>
                    </div>
                    <div className="bg-gray-100 flex gap-4 p-3 items-center">
                        <RiBillLine className="text-2xl" />
                        <p className="font-medium">Bill available</p>
                    </div>
                    <div className="bg-gray-100 flex gap-4 p-3 items-center">
                        <CiCreditCard1 className="text-2xl" />
                        <p className="font-medium">Online or Cash on Delivery</p>
                    </div>

                    <div className="flex justify-center mt-4">
                        <img src="/card.png" className="w-40" alt="Payment Methods" />
                    </div>
                </div>
            </div>

            {/* Related Product Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center">--- Related Products ---</h2>
                <Home2 />
            </div>
        </div>
    );
};

export default ProductDetail;
