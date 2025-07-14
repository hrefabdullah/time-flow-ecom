import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../features/cart/cart.js';
import { motion } from 'motion/react';
import CartSideItem from './CartSideItem.jsx';
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { empty } from '../features/cart/userCart.js';
import { Link } from 'react-router-dom'

const CartSidebarr = () => {

    const dispatch = useDispatch()
    const cartLength = useSelector((state) => state.userCart)
    const isCartSidebar = useSelector((state) => state.cart)
    const isDark = useSelector((state) => state.darkMode)
    const cartItems = useSelector((state) => state.userCart)


    const closeCartSidebar = () => {
        dispatch(toggleCart())
    }


    return (
        <>
            {isCartSidebar && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                    onClick={closeCartSidebar}
                />
            )}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "tween", duration: 0.2 }}
                className={`place-self-end w-[50%] z-50 fixed top-0 right-0 h-full md:w-[35%] lg:w-[20%] mf p-5 ${isDark ? 'bg-[#13131a] text-white' : "bg-zinc-200 text-[#101019]"} transition-colors duration-300`}>
                <button onClick={closeCartSidebar}><RxCross2 className='absolute right-5 top-5 text-lg' /></button>
                <h1 className='text-xl font-medium place-self-start'>Your Cart</h1>
                {cartLength.length ? <div className='flex flex-col justify-between h-[94%]'>
                    {cartItems.map((elem, index) => (
                        <div className='flex justify-center' key={index}>
                            <CartSideItem name={elem.name} idx={index} image={elem.img1} price={elem.price} color={elem.color} />
                        </div>
                    ))}
                    <div className='flex gap-3 place-self-center'>
                        <div className='flex items-center text-xl font-semibold bg-zinc-800 w-max px-3 py-2 rounded-lg text-white gap-3'>
                            <Link to={`/checkout`}>Buy</Link>
                            <CiMoneyCheck1 />
                        </div>
                        <div className='flex items-center text-xl font-semibold bg-red-500 w-max px-2 py-2 rounded-lg text-white gap-3'>
                            <button onClick={() => dispatch(empty())}><RiDeleteBin7Fill /></button>
                        </div>
                    </div>
                </div> : <div className='flex flex-col items-center gap-3 mt-8'>
                    <img className='w-20 opacity-60' src="https://cdn-icons-png.flaticon.com/128/5372/5372351.png" alt="" />
                    <h1 className='opacity-70 text-sm'>Your cart is empty</h1>
                    <button className={`${isDark ? 'bg-zinc-200 text-[#101019] active:bg-zinc-500' : 'bg-zinc-600 text-white active:bg-zinc-700'} py-1 px-3 text-sm rounded-lg`}>Go to store</button>
                </div>
                }
            </motion.div>
        </>
    )
}

export default CartSidebarr