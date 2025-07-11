import React from 'react';

const ResultProducts = ({ results = [] }) => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-6">Search Results</h2>

      {results.length === 0 ? (
        <p className="text-gray-500 text-sm">No matching products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {results.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden cursor-pointer group hover:shadow-sm transition relative"
            >
              {/* Ratings badge */}
              <div className="absolute top-2 left-2 bg-white text-yellow-500 text-xs font-semibold px-1.5 py-0.5 rounded shadow">
                ⭐ {product.ratings}
              </div>

              {/* Product Image */}
              <div className="w-full h-44 bg-white overflow-hidden">
                <img
                  src={product.img1}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-2">
                <p className="text-gray-800 text-sm font-medium truncate">{product.brand}</p>
                <p className="text-gray-500 text-xs truncate">{product.name}</p>
                <p className="text-gray-600 text-xs mt-1 capitalize">
                  {product.color} • {product.gender}
                </p>
                <p className="text-black text-sm font-semibold mt-1">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultProducts;
