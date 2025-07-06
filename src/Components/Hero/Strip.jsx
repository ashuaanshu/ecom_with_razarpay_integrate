import React from 'react'

import { CiDeliveryTruck } from "react-icons/ci";
import { Ri24HoursLine } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";

const Strip = () => {
  return (
    <div className='flex flex-wrap  px-20 gap-20 mt-5 mb-5'>

        <div className='grid grid-cols-3'>

            <div><p className='text-6xl  hover:shake'><CiDeliveryTruck /></p></div>

        <div className='col-span-2'><p className='font-bold text-2xl'>Free Shipping</p>
        <p>Free Shipping on all order</p></div>
        
        </div>

        <div className='grid grid-cols-3'>

            <div><p className='text-6xl  hover:shake'><Ri24HoursLine /></p></div>
            <div className='col-span-2'><p className='font-bold text-2xl'>Support 24/7</p>
            <p>Free Shipping on all order</p></div>
            
        </div>

        <div className='grid grid-cols-3'>

            <div><p className='text-6xl  hover:shake'><RiRefund2Fill /></p></div>
            <div className='col-span-2'><p className='font-bold text-2xl'>Money Return</p>
            <p>Free Shipping on all order</p></div>
            
        </div>

        <div className='grid grid-cols-3'>
            <div> <p className='text-6xl hover:shake'><CiDiscount1 /></p></div>
           <div className='col-span-2'><p className='font-bold text-2xl'>Order Discount</p>
            <p>Free Shipping on all order</p></div>
            
        </div>
    </div>
  )
}

export default Strip