import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../assets/products.js'
import { useSelector } from 'react-redux'

const Cataloge = ({ latest }) => {

    const isDark = useSelector((state) => state.darkMode)

  return (
    <div className='w-full h-[20vh] min-h-[280px] md:min-h-[400px] md:h-[20vh] mt-5 flex flex-col gap-4 mb-10 items-center'>
        <h1 className='text-lg md:text-2xl opacity-90'>- New Arrivals -</h1>
        <div style={{
            overflowX: "scroll",
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        }} className={`${isDark ? 'border-y-1 border-white text-[#101019]' : 'bg-blue-200 text-[#101019]'} p-3 h-full w-full flex gap-4 whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden`}>
            <ProductCard item={products[2]} />
            <ProductCard item={products[19]} />
            <ProductCard item={products[21]} />
        </div>
    </div>
  )
}

export default Cataloge