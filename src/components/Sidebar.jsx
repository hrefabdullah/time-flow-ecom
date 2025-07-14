import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/sidebar/sidebar';
import { toggleDarkMode } from '../features/theme/darkMode';
import { FaGithub, FaLinkedinIn, FaShoppingBag } from "react-icons/fa";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { motion } from 'motion/react';
import { toggleCart } from '../features/cart/cart';

const Sidebar = () => {

    const dispatch = useDispatch()
    const cartLength = useSelector((state) => state.userCart)
    const isSidebar = useSelector((state) => state.sidebar)
    const isDark = useSelector((state) => state.darkMode)


    const closeSidebar = () => {
        dispatch(toggleSidebar())
    }


    return (
        <>
            {isSidebar && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                    onClick={closeSidebar}
                />
            )}
            <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "tween", duration: 0.2 }}
                className={`place-self-end w-[50%] z-50 fixed top-0 right-0 h-full md:hidden p-5 ${isDark ? 'bg-[#13131a] text-white' : "bg-zinc-200 text-[#101019]"} transition-colors duration-300 `}>
                <button onClick={closeSidebar}><RxCross2 className='absolute right-5 top-5 text-lg' /></button>
                <div className='w-full flex justify-center my-5'>
                    <div className='absolute top-[100px] right-[40%] h-5.5 w-5.5 rounded-full bg-blue-700 text-sm flex items-center justify-center text-white'>
                        <h1>{cartLength.length}</h1>
                    </div>
                    <FaShoppingBag onClick={() => {
                        dispatch(toggleCart())
                        dispatch(toggleSidebar())
                    }} className='text-5xl' />
                </div>
                <ul className='flex flex-col items-start mt-8 text-[14px]'>
                    <li>Home</li>
                    <li>Store</li>
                    <li>Categories</li>
                    <li>About us</li>
                    <button className='mt-2 text-lg' onClick={() => dispatch(toggleDarkMode())}>
                        {isDark ? <IoSunny /> : <IoMoonSharp />}
                    </button>
                </ul>
                <div className='flex gap-2 absolute bottom-5 text-lg'>
                    <FaGithub />
                    <FaLinkedinIn />
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar