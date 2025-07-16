import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../assets/products.js'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Cataloge = ({ name, type }) => {

  const isDark = useSelector((state) => state.darkMode)

  const best = products.filter((elem) => (
    elem.bestseller
  )).map((elem, idx) => (
    elem
  ))

  return (
    <div
      className={`${isDark ? 'bg-[#101019]' : 'bg-[#101019] text-white'} w-full h-[30vh] min-h-[350px] md:min-h-[450px] md:h-[24vh] flex flex-col gap-4 p-3 items-center pt-7`}>

      <div className='flex w-full justify-between items-start px-6'>
        <h1
          className='text-lg md:text-2xl opacity-90'
        >{name}</h1>

        {type === 'best' ? <Link
          to={'/products/best'}
          className='place-self-end text-xs md:text-md border-1 rounded-full px-3 py-2 active:scale-95 hover:bg-white hover:text-[#101019]'
        >View all</Link> : ''}
      </div>

      {type === 'new' ? <div
        style={{
          overflowX: "scroll",
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className={`${isDark ? 'border-white text-[#101019]' : 'bg-[#101019] text-[#101019]'} h-max w-full flex gap-4 whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden md:justify-center items-center`}>

        <Link to={`/product/2`}><ProductCard item={products[2]} /></Link>
        <Link to={`/product/19`}><ProductCard item={products[19]} /></Link>
        <Link to={`/product/21`}><ProductCard item={products[21]} /></Link>

      </div>
        :
        <div
          style={{
            overflowX: "scroll",
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          className={`${isDark ? 'text-[#101019]' : 'bg-[#101019] text-[#101019]'} h-max w-full flex gap-4 whitespace-nowrap overflow-x-auto [&::-webkit-scrollbar]:hidden md:justify-center items-center`}>

          {best.slice(0, 4).map((item, idx) => (
            <Link key={idx} to={`/product/${item.id - 1}`}>
              <ProductCard item={item} />
            </Link>
          ))}

        </div>}
    </div>
  )
}

export default Cataloge