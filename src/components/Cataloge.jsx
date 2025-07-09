import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../assets/products.js'
import { useSelector } from 'react-redux'
const Cataloge = ({ name, type }) => {

  const isDark = useSelector((state) => state.darkMode)

  const best = products.filter((elem) => (
          elem.bestseller
        )).map((elem, idx) => (
          elem
        ))

  return (
    <div 
    className={`${isDark ? 'bg-[#101019]' : 'bg-[#101019] text-white'} w-full h-[20vh] min-h-[310px] md:min-h-[450px] md:h-[20vh] flex flex-col gap-4 p-5 items-center`}>

      <h1 
      className='text-lg md:text-2xl opacity-90'
      >{name}</h1>

      { type === 'best' ? <button 
      className='absolute right-7 text-xs md:text-md border-1 rounded-full px-3 py-2 active:scale-95 hover:bg-white hover:text-[#101019]'
      >View all</button> : ''}

      {type === 'new' ? <div 
      style={{
        overflowX: "scroll",
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }} 
      className={`${isDark ? 'border-y-1 border-white text-[#101019]' : 'bg-[#101019] text-[#101019]'} p-2 h-full w-full flex gap-4 whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden md:justify-center`}>

        <ProductCard item={products[2]} />
        <ProductCard item={products[19]} />
        <ProductCard item={products[21]} />

      </div> 
      : 
      <div 
      style={{
        overflowX: "scroll",
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }} 
      className={`${isDark ? 'border-y-1 border-white text-[#101019]' : 'bg-[#101019] text-[#101019]'} p-2 h-full w-full flex gap-4 whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden md:justify-start`}>


        {best.slice(0, 4).map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}

      </div>}
    </div>
  )
}

export default Cataloge