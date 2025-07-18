import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

const About = () => {
    const isDark = useSelector((state) => state.darkMode);

    const bgClass = isDark ? "bg-[#101019] text-white" : "bg-blue-50 text-[#101019]";
    const cardBgClass = isDark ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700";

    return (
        <>
            <Navbar />
            <div className={`min-h-screen py-16 px-6 ${bgClass}`}>
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* Intro Section */}
                    <section className={`rounded-2xl shadow-xl p-8 ${cardBgClass}`}>
                        <h1 className="text-5xl font-extrabold mb-4 text-blue-500">About Timeflow</h1>
                        <p className="text-xl italic mb-6 text-blue-400">Let the time flow.</p>
                        <p className="leading-relaxed text-lg">
                            At <strong>Timeflow</strong>, we craft more than watches—we create timepieces that echo elegance, precision, and timeless value. Our mission is to bring premium craftsmanship and design innovation to every wrist, ensuring each moment is captured with style and intention.
                        </p>
                    </section>

                    {/* Visual Section */}
                    <section className="grid md:grid-cols-3 gap-6">
                        <img
                            src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
                            alt="Premium watch closeup"
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdhdGNofGVufDB8fDB8fHww"
                            alt="Elegant wristwatch on hand"
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww"
                            alt="Luxury watches collection"
                            className="w-full h-64 object-cover rounded-xl shadow-md"
                        />
                    </section>

                    {/* Brand Philosophy */}
                    <section className={`rounded-2xl shadow-xl p-8 ${cardBgClass}`}>
                        <h2 className="text-3xl font-bold mb-4 text-blue-400">What Timeflow Stands For</h2>
                        <ul className="list-disc pl-6 space-y-3 text-lg">
                            <li><strong>Precision Engineering:</strong> Every Timeflow watch is powered by refined movements and meticulously tested mechanics.</li>
                            <li><strong>Timeless Aesthetics:</strong> From classic chronographs to modern minimalist designs, we combine tradition with trend.</li>
                            <li><strong>Premium Materials:</strong> Sapphire crystals, stainless steel cases, and genuine leather straps—only the best makes the cut.</li>
                            <li><strong>Craftsmanship & Innovation:</strong> We embrace heritage techniques while pushing boundaries in design and sustainability.</li>
                        </ul>
                    </section>

                    {/* Final Message + Contact Link */}
                    <section className={`rounded-2xl shadow-xl p-8 ${cardBgClass}`}>
                        <p className="text-lg leading-relaxed mb-4">
                            Whether you're a collector, a gift-giver, or someone exploring their first luxury timepiece, <strong>Timeflow</strong> is built to accompany your journey.
                            Join those who believe in lasting quality, thoughtful design, and moments that matter.
                        </p>
                        <p className="text-blue-400 italic mb-6">
                            Let the time flow—beautifully, purposefully, and always on your terms.
                        </p>
                        <div className="flex gap-5">
                            <Link
                                to="/contact"
                                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/store"
                                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
                            >
                                Go to store
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default About;
