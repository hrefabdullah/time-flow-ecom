import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';
import { allBrands, allCategory, filterbyBrand, filterbyGender } from '../utils/searchProducts';

const ResultProducts = ({ results = [] }) => {
  const brands = allBrands;
  const category = allCategory;
  const { name } = useParams();
  const search = useSelector((state) => state.searchInput);
  const isDark = useSelector((state) => state.darkMode);

  // Filter by brand or category based on URL param
  brands.forEach((elem) => {
    if (name === elem.toLowerCase()) {
      results = filterbyBrand(name);
    }
  });

  category.forEach((elem) => {
    if (name === elem.toLowerCase()) {
      results = filterbyGender(name);
    }
  });

  const bgClass = isDark ? 'bg-[#101019] text-white' : 'bg-white text-[#101019]';
  const cardBg = isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-gray-800';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';



  return (
    <>
      <Navbar />
      <div className={`${bgClass} px-4 py-6 min-h-screen`}>
        {search ? (
          <h2 className="text-xl font-semibold mb-6">
            Search Results (<span>{results.length}</span>)
          </h2>
        ) : (
          <h1 className="text-xl font-semibold mb-6">All Products</h1>
        )}

        {results.length === 0 ? (
          <p className={`${textSecondary} text-sm`}>No matching products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-3">
            {results.map((product) => (
              <Link
                to={`/product/${product.id - 1}`}
                key={product.id}
                className={`group rounded-sm overflow-hidden cursor-pointer transition relative border ${cardBg}`}
              >
                {/* Ratings badge */}
                <div className={`absolute top-2 left-2 bg-white text-yellow-500 text-xs font-semibold px-1.5 py-0.5 rounded shadow`}>
                  ⭐ {product.ratings}
                </div>

                {/* Product Image */}
                <div className={`w-full h-44 overflow-hidden place-items-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <img
                    src={product.img1}
                    alt={product.name}
                    className="w-[200px] rounded-t-lg object-contain h-[176px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-2 flex flex-col items-center">
                  <p className={`${textPrimary} text-sm font-medium truncate`}>{product.brand}</p>
                  <p className={`${textSecondary} text-xs truncate`}>{product.name}</p>
                  <p className={`${textSecondary} text-xs mt-1 capitalize`}>
                    {product.color} • {product.gender}
                  </p>
                  <p className={`${isDark ? 'text-white' : 'text-black'} font-semibold mt-1`}><span className='line-through mr-2 font-light opacity-75'>₹{product.price + Math.floor(product.price / 10)}</span> 
                  ₹{product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ResultProducts;
