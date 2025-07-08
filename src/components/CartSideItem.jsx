import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemCart } from '../features/cart/userCart.js';

const CartSideItem = ({ image, name, price, color, idx }) => {

    const dispatch = useDispatch()
    const usdPrice = Math.round(price / 85.68)
    const highPrice = Math.floor(usdPrice*2)

    return (
        <div className='relative mt-5 w-[90%] h-max p-3 rounded-lg bg-white text-[#101019]  shadow-lg'>
            <button onClick={() => dispatch(removeItemCart(idx))} className='absolute right-2 top-2 active:text-red-600'><RxCross2 /></button>
            <img className='mt-3' src={image} alt="" />
                <h1 className='text-sm mb-1'>{name}
                </h1>
            <h1 className='text-xl font-semibold flex'>
                <span className='font-normal text-sm line-through mr-2 opacity-75'>${highPrice}</span>
                ${usdPrice}
            </h1>
        </div>
    )
}

export default CartSideItem