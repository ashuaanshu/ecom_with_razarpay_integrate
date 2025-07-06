import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FaEarthAfrica } from "react-icons/fa6";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { RiBillLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { GrMastercard } from 'react-icons/gr';
import Popup from './Popup';
import Home2 from './Hero/Home2';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quan, setQuan] = useState(0)
    const [showPopup, setShowpopup] =useState(false)

    const increment = () => {
        setQuan(quan + 1)
    }

    const decrement = () => {
        if (quan > 0) {
            setQuan(quan - 1);
        }
    };

    const abc = ()=>{
        setShowpopup(true)
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            // axios.get(`https://api.escuelajs.co/api/v1/products`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id])

    if (!product) return <p>Loading....</p>;
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 p-10 gap-20 flex-col' >
                <div className='flex justify-center items-center'>
                    <img src={product.image} className='h-80' />
                </div>

                <div>
                    
                    <p className='text-2xl font-bold px-4 mb-4'>{product.title}</p>
                    <div className='flex justify-between px-5'>
                        <p className='font-bold'>Brand: .....   </p><p className='font-bold text-center text-md'>Rating: {product.rating.rate}⭐</p>
                    </div>
                    <hr />

                    <p className=' font-bold text-2xl p-5'>Price: ₹{product.price}</p>
                    <p className='  text-lg flex m-2 overflow-y-auto break-words w-120 '><label className='text-xl font-semibold'>Description:  </label>{product.description}</p>

                    <p className='text-center font-semibold font-mono text-xl py-4'>Quantity</p>
                    <div className='border px-5 p-1 rounded-2xl text-center flex justify-between'>

                        <button onClick={decrement} className='p-2 px-20 text-2xl rounded-lg'> <RiSubtractLine /> </button><span className='font-bold text-2xl my-1'> {quan} </span> <button onClick={increment} className=' p-1 px-20 rounded-md text-2xl'> <IoMdAdd /> </button>
                    </div>
                    <div className='flex gap-10 items-center justify-center p-5'>
{showPopup && <Popup onClose={() => setShowpopup(false)} />}
    

                        <button className='border rounded-xl p-4 hover:cursor-pointer hover:scale-90 bg-blue-600 hover:bg-blue-700'> Add to Cart</button>
                        <button className='border rounded-xl p-4 px-7 hover:cursor-pointer hover:scale-90 bg-blue-600 hover:bg-blue-700' onClick={abc}>Order</button>
                    </div>
                    <hr />
                </div>
                {/* <div className="bg-gray-100 p-6 rounded-lg shadow-md text-sm font-medium leading-6 space-y-4 w-full max-w-xs"></div> */}
                {/* <div className='bg-gray-200 p-10 gap-10 rounded-2xl space-y-4 flex'>

                    <div className='text-2xl '>
                        <p><FaEarthAfrica className='my-2' /></p>
                        <p><AiOutlineDeliveredProcedure className='my-2' /></p>
                        <p><RiBillLine className='my-2' /></p>
                        <p><CiCreditCard1 /></p>

                    </div>
                    <div className='font-semibold '>
                        <p>Shipping worldwide</p>
                        <p>Free 7-day return if eligible, so easy</p>
                        <p>Supplier give bills for this product.</p>
                        <p>Pay online or when receiving goods </p>
                    </div>

                </div> */}

                <div>
                    <div className='bg-gray-100 flex gap-20 p-2 mt-6 px-6'>
                        <p><FaEarthAfrica className=' text-2xl' /></p>
                        <p className='font-medium'>Shipping worldwide</p>
                    </div>
                    <div className='bg-gray-100 flex gap-20 p-2 px-6'>
                        <p><AiOutlineDeliveredProcedure className='text-2xl' /></p>
                        <p className='font-medium'>Free 7-day return if eligible, so easy</p>
                    </div>
                    <div className='bg-gray-100 flex gap-20 p-2 px-6'>
                        <p><RiBillLine className=' text-2xl' /></p>
                        <p className='font-medium'>Supplier give bills for this product</p>
                    </div>
                    <div className='bg-gray-100 flex gap-20 p-2 px-6'>
                        <p><CiCreditCard1 className=' text-2xl' /></p>
                        <p className='font-medium'>Pay online or when receiving goods</p>
                    </div>
                    <hr  className='mt-5'/>
                    
                    <div className='flex gap-5'>
                        <img src='/card.png'className='mt-5' />
                        
                    {/* <img src="/mastercard.png" className='h-20 mt-5 '/>
                    <img src="/visa.png" className='h-30' /> */}
                </div>
                </div>

            </div>

            <div>
                <h2 className='text-2xl font-bold text-center'>--- Related Product ---</h2>
                {/* <Home /> */}
                <Home2 />
            </div>

        </div>
    )
}

export default ProductDetail
