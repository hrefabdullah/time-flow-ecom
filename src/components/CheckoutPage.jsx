import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { products } from "../assets/products";


const CheckoutPage = () => {

  const qtyCart = useSelector((state) => state.quantity)
  console.log(qtyCart);
  

  let userProducts, product

  const { id } = useParams() 
  if(!id){
    userProducts = useSelector((state) => state.userCart)

    
  } else {
    product = products[id]
  }

  const isDark = useSelector((state) => state.darkMode);

  const bgClass = isDark ? "bg-[#101019] text-white" : "bg-white text-[#101019]";
  const cardBgClass = isDark ? "bg-[#1c1c2a]" : "bg-white";
  const borderClass = isDark ? "border-gray-700" : "border-blue-100";
  const inputBg = isDark ? "bg-[#2a2a3b] text-white" : "bg-white text-gray-700";

  return (
    <>
      <Navbar />
      <div className={`max-w-4xl mx-auto px-6 py-5 min-h-screen ${bgClass}`}>

        <nav className={`mb-5 text-sm font-medium ${isDark ? "text-blue-400" : "text-blue-700"}`}>
          Home &gt; Checkout
        </nav>

        <div className={`rounded-2xl shadow-lg p-6 border ${borderClass} ${cardBgClass}`}>
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>

          { id ? ( <div className={`flex gap-6 mb-8 border ${borderClass} rounded-xl p-6`}>
            <img
              src={product.img1}
              alt={product.name}
              className="w-32 h-32 object-contain rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                by {product.brand}
              </p>
              <p className="text-2xl font-bold mt-4 text-blue-500">₹{product.price}</p>
            </div>
          </div> ) : ( <div>
            { userProducts.map((elem, idx) => (
              <div key={idx} className={`flex gap-4 mb-6 border ${borderClass} rounded-xl p-6`}>
            <img
              src={elem.img1}
              alt={elem.name}
              className="w-29 h-29 object-contain rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold">{elem.name}</h2>
              <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                by {elem.brand}
              </p>
              <p className="text-2xl font-bold mt-2 text-blue-500">₹{elem.price}</p>
            </div>
          </div>
            ))}
          </div> )}

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className={`w-full p-3 border rounded-lg focus:outline-none ${inputBg}`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 border rounded-lg focus:outline-none ${inputBg}`}
              />
              <input
                type="text"
                placeholder="Address"
                className={`w-full p-3 border rounded-lg focus:outline-none md:col-span-2 ${inputBg}`}
              />
              <input
                type="text"
                placeholder="City"
                className={`w-full p-3 border rounded-lg focus:outline-none ${inputBg}`}
              />
              <input
                type="text"
                placeholder="Postal Code"
                className={`w-full p-3 border rounded-lg focus:outline-none ${inputBg}`}
              />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-lg font-medium mb-2">
              <span>Subtotal</span>
              { id ? <span>₹{product.price}</span> : <span>₹{userProducts.reduce((acc, item) => acc + item.price, 0)}</span> }
            </div>
            <div className="flex justify-between text-lg font-medium mb-2">
              <span>Shipping</span>
              <span>₹40</span>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Total</span>
              { id ? <span>₹{product.price + 40}</span> : <span>₹{userProducts.reduce((acc, item) => acc + item.price, 0) + 40}</span> }
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition shadow-lg text-lg">
            Place Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
