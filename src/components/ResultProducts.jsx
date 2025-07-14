import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';
import { allBrands, allCategory, filterbyBrand, filterbyGender } from '../utils/searchProducts';

const ResultProducts = ({ results = [] }) => {

  const brands = allBrands
  const category = allCategory

  const { name } = useParams()

  brands.forEach(elem => {
    if(name === elem.toLowerCase()){
      results = filterbyBrand(name)
    } else return
  });

  category.forEach(elem => {
    if(name === elem.toLowerCase()){
      results = filterbyGender(name)
    } else return
  });

  console.log(results)

  const search = useSelector((state) => state.searchInput);

  return (
    <>
      <Navbar />
      <div className="px-4 py-6">
        {search ? (
          <h2 className="text-xl font-semibold mb-6">
            Search Results (<span>{results.length}</span>)
          </h2>
        ) : (
          <h1 className="text-xl font-semibold mb-6">All Products</h1>
        )}

        {results.length === 0 ? (
          <p className="text-gray-500 text-sm">No matching products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {results.map((product) => (
              <Link to={`/product/${product.id}`}
                key={product.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden cursor-pointer group hover:shadow-sm transition relative"
              >
                {/* Ratings badge */}
                <div className="absolute top-2 left-2 bg-white text-yellow-500 text-xs font-semibold px-1.5 py-0.5 rounded shadow">
                  ⭐ {product.ratings}
                </div>

                {/* Product Image */}
                <div className="w-full h-44 bg-white overflow-hidden place-items-center p-2">
                  <img
                    src={product.img1}
                    alt={product.name}
                    className="w-[200px] object-contain h-[170px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="p-2 flex flex-col items-center">
                  <p className="text-gray-800 text-sm font-medium truncate">{product.brand}</p>
                  <p className="text-gray-500 text-xs truncate">{product.name}</p>
                  <p className="text-gray-600 text-xs mt-1 capitalize">
                    {product.color} • {product.gender}
                  </p>
                  <p className="text-black  font-semibold mt-1">₹{product.price}</p>
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
