import React from 'react'
import Navbar from './Navbar'
import SearchBox from './SearchBox'
import Sidebar from './Sidebar'
import CartSidebarr from './CartSidebarr'
import Crousal from './Crousal'
import Cataloge from './Cataloge'
import Quote from './Quote'
import Category from './Category'
import Testimonials from './Testimonials'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Home = () => {

    const isDark = useSelector((state) => state.darkMode);

    return (
        <div className={`overflow-hidden ${isDark ? 'bg-[#101019] text-white' : 'bg-white'} transition-colors duration-300 text-center font-[poppins]`}>
            <Navbar isDark={isDark} />
            <Crousal />
            <Cataloge name={'New Arrivals'} type={'new'} />
            <Quote />
            <Category type={'gender'} />
            <Cataloge name={'Best Sellers'} type={'best'} />
            <Category type={'brands'} />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Home