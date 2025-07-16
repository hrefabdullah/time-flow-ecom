import { useMemo } from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { products } from "../assets/products.js";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { addItemCart } from "../features/cart/userCart.js";
import { addQuantity } from "../features/cart/userCartQuan.js";


const mockReviews = [
  {
    id: 1,
    user: "Alice",
    avatar: "https://i.pravatar.cc/43?img=3",
    rating: 5,
    comment:
      "Absolutely love this watch! Perfect for my kid and very durable.",
  },
  {
    id: 2,
    user: "John",
    avatar: "https://i.pravatar.cc/48?img=12",
    rating: 4,
    comment: "Good value for the price. The color is vibrant and looks great.",
  },
  {
    id: 3,
    user: "Shak",
    avatar: "https://i.pravatar.cc/48?img=69",
    rating: 4,
    comment:
      "Strap is comfortable and the dial is easy to read. Highly recommend!",
  },
];

const ProductDetails = () => {

  const dispatch = useDispatch()
  const userCart = useSelector((state) => state.userCart)


  const handleCart = () => {

    dispatch(addItemCart(product))
    dispatch(addQuantity(userCart))

  }






  const { id } = useParams();
  const product = products[id]
  const [mainImage, setMainImage] = useState(product.img1);
  const isDark = useSelector((state) => state.darkMode);

  const bgClass = isDark ? "bg-[#101019] text-white" : "bg-blue-50 text-[#101019]";
  const cardBgClass = isDark ? "bg-gray-800" : "bg-white";
  const borderClass = isDark ? "border-gray-700" : "border-blue-100";

  const suggestedProducts = useMemo(() => {
    const others = products.filter((p, index) => index !== Number(id));
    const shuffled = others.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4); // pick 4 suggestions
  }, [id]);

  return (
    <>
      <Navbar />
      <div
        className={`max-w-7xl mx-auto px-6 py-12 min-h-screen lg:min-h-[70vh] lg:h-max ${bgClass}`}
      >
        {/* Breadcrumb */}
        <nav className={`mb-8 text-xs lg:text-sm font-medium ${isDark ? "text-blue-400" : "text-blue-700"}`}>
          Home &gt; <Link to={`/products/${product.brand.toLowerCase()}`}>{product.brand}</Link> &gt; {product.name}
        </nav>

        <div
          className={`grid md:grid-cols-2 gap-14 rounded-2xl shadow-lg p-8 lg:h-[84vh] lg:overflow-y-auto ${cardBgClass}`}
        >
          {/* Left: Images */}
          <div>
            <div className={`border ${borderClass} rounded-xl shadow-sm`}>
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-[300px] md:h-[400px] object-contain select-none rounded-xl"
              />
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {[product.img1, product.img2, product.img3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`w-16 h-16 md:w-24 md:h-24 object-contain border-2 rounded-lg cursor-pointer transition ${mainImage === img
                    ? "border-blue-500 shadow-lg"
                    : "border-transparent hover:border-blue-400"
                    }`}
                />
              ))}
            </div>
          </div>

          <div
            className="flex flex-col justify-between lg:overflow-y-auto lg:h-[70vh]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div>
              <h1 className="text-3xl font-extrabold leading-tight">{product.name}</h1>
              <p className={`text-lg mt-1 font-semibold ${isDark ? "text-blue-300" : "text-blue-700"}`}>
                by {product.brand}
              </p>

              <div className="flex items-center space-x-3 mt-4">
                <span className="text-yellow-400 text-xl font-semibold">⭐ {product.ratings}</span>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  (based on user reviews)
                </span>
              </div>

              <p className={`text-4xl font-bold mt-6 ${isDark ? "text-blue-400" : "text-blue-800"}`}>
                ₹{product.price}
              </p>

              {/* Buttons */}
              <div className="flex gap-6 mt-8">
                <Link to={`/checkout/${id}`} className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition">
                  Buy Now
                </Link>
                <button onClick={() => handleCart()} className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-3 rounded-lg shadow-md transition">
                  Add to Cart
                </button>
              </div>

              {/* Description */}
              <div className={`mt-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <h2 className="text-2xl font-bold mb-3">Product Description</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nemo obcaecati odio delectus provident eaque sequi incidunt recusandae, perferendis cupiditate dolore repudiandae dolorem eius hic suscipit accusantium sed laudantium! Doloribus laboriosam consectetur hic, nihil, atque minima dolorum architecto distinctio id aliquid et, autem eaque saepe nemo!
                </p>
              </div>
            </div>


            {/* Specifications */}
            <div className="mt-12">
              <h2
                className={`text-2xl font-bold mb-6 border-b-4 pb-2 ${isDark ? "border-blue-500" : "border-blue-600"
                  }`}
              >
                Specifications
              </h2>

              <div className={`w-full border ${borderClass} rounded-xl shadow-md overflow-hidden`}>
                <div className="divide-y divide-blue-100">
                  {[
                    { label: "Brand", value: product.brand },
                    { label: "Type", value: product.type },
                    { label: "Dial Color", value: product.dialColor },
                    { label: "Strap Material", value: product.strap },
                    { label: "Color", value: product.color },
                    { label: "For", value: product.gender },
                  ].map(({ label, value }, idx) => (
                    <div
                      key={label}
                      className={`flex justify-between px-6 py-4`}
                    >
                      <span className=" font-semibold">{label}</span>
                      <span className={` capitalize`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-12">
              <h2
                className={`text-2xl font-bold mb-6 border-b-4 pb-2 ${isDark ? "border-blue-500" : "border-blue-600"
                  }`}
              >
                Reviews
              </h2>
              <div className="space-y-6">
                {mockReviews.map(({ id, user, avatar, rating, comment }) => (
                  <div
                    key={id}
                    className={`p-4 rounded-lg shadow-md ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"
                      }`}
                  >
                    <div className="flex items-center mb-2">
                      <img
                        src={avatar}
                        alt={user}
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-semibold">{user}</p>
                        <span className="text-yellow-400">{"⭐".repeat(rating)}</span>
                      </div>
                    </div>
                    <p>{comment}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Suggestions */}
            <div className={`mt-12 ${isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"
                      }`}>
                <h2 className={`text-2xl font-bold mb-6 border-b-4 pb-2 ${isDark ? "border-blue-500" : "border-blue-600"
                  }`}>You may also like</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {suggestedProducts.map((item) => (
                    <Link
                      to={`/product/${item.id - 1}`}
                      key={item.id}
                      className={`border rounded-lg overflow-hidden hover:shadow-lg transition ${cardBgClass} ${borderClass}`}
                    >
                      <img
                        src={item.img1}
                        alt={item.name}
                        className="w-full h-44 object-contain bg-white p-2"
                      />
                      <div className="p-3">
                        <h3 className="text-sm font-semibold truncate">{item.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{item.brand}</p>
                        <p className="font-bold  mt-1">₹{item.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
