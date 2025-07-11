import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductCard = ({ item }) => {
  const isDark = useSelector((state) => state.darkMode);
  const [img, setImg] = useState(item.img1);

  const originalPrice = item.price + Math.floor(item.price / 10);
  const discountPrice = item.price;
  const usdPrice = "$" + Math.floor(item.price / 85);

  return (
    <div
      className={`bg-white ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300 cursor-pointer w-full h-full`}
    >
      {/* Image with hover effect */}
      <div className="w-full flex justify-center items-center mb-3 h-[140px] md:h-[180px] lg:h-[200px] overflow-hidden">
        <img
          src={img}
          alt={item.name}
          onMouseEnter={() => setImg(item.img3)}
          onMouseOut={() => setImg(item.img1)}
          className="object-contain max-h-full transition-transform duration-300"
        />
      </div>

      {/* Product Brand */}
      <h2 className="text-sm md:text-base font-semibold mb-1 truncate">{item.brand}</h2>

      {/* Product Name */}
      <p className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mb-2 text-center line-clamp-2">
        {item.name}
      </p>

      {/* Pricing */}
      <div className="text-sm md:text-base font-medium">
        <span className="line-through text-gray-500 mr-2">₹{originalPrice}</span>
        <span className="text-black dark:text-white">₹{discountPrice}</span>
      </div>

      {/* Optional USD Price */}
      {/* <p className="text-xs text-gray-400 mt-1">~{usdPrice}</p> */}
    </div>
  );
};

export default ProductCard;
