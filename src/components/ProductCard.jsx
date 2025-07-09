import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductCard = ({ item }) => {

    const isDark = useSelector((state) => state.darkMode)

    const [img, setImg] = useState(item.img1)

    const disPrice = "₹" + item.price
    const usdPrice = "$" + Math.floor(item.price/85)
    const price = "₹" + (item.price + Math.floor(item.price/10))

  return (
    <div className={`bg-white h-full min-w-[145px] md:min-w-[300px] md:w-[10vw] p-9 rounded-lg shadow-lg flex flex-col justify-center items-center transition-transform duration-300 hover:scale-102`}>
        <img className='md:w-[20vw] w-[25vw] min-w-[130px] md:h-[16vh] lg:h-[27vh] h-[17vh] object-contain' onMouseEnter={() => setImg(item.img3)} onMouseOut={() => setImg(item.img1)} src={img} alt={item.name}  />
        <h1 className='text-sm md:text-lg font-medium font-sans mb-[-3px] mt-2'>{item.brand}</h1>
        <h1 className='text-xs md:text-[1.4vh]'>{item.name}</h1>
        <h1 className='font-medium md:text-xl text-sm font-sans'><span className='font-normal line-through opacity-80'>{price}</span> { disPrice }</h1>
    </div>
  )
}

export default ProductCard