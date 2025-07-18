import React from "react";
import { Link } from "react-router-dom";
import { allBrands, filterbyBrand } from "../utils/searchProducts";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const AllBrands = () => {
  const isDark = useSelector((state) => state.darkMode);

  const bgClass = isDark ? "bg-[#101019] text-white" : "bg-blue-50 text-[#101019]";
  const cardClass = isDark
    ? "bg-gray-800 text-white border-gray-700 hover:border-blue-400"
    : "bg-white text-gray-800 border-gray-200 hover:border-blue-600";

  return (
    <>
        <Navbar />
        <div className={`min-h-screen px-6 py-12 ${bgClass}`}>
      <h1 className="text-2xl font-bold mb-8 text-center">Shop by Brand</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {allBrands.map((brand) => {
          const brandProducts = filterbyBrand(brand.toLowerCase());
          const sampleProduct = brandProducts[0];

          return (
            <Link
              key={brand}
              to={`/products/${brand.toLowerCase()}`}
              className={`min-w-[170px] md:h-[35vh] p-5 border rounded-xl text-center font-semibold shadow-sm transition hover:shadow-md flex flex-col justify-center items-center ${cardClass}`}
            >
              {sampleProduct && (
                <img
                  src={sampleProduct.img1}
                  alt={brand}
                  className="w-full h-45 md:h-55 mb-2 object-cover rounded-xl"
                />
              )}
              <div className="text-xl mb-2">{brand}</div>
            </Link>
          );
        })}
      </div>
    </div>
    <Footer />
    <ScrollToTopButton />
    </>

  );
};

export default AllBrands;
