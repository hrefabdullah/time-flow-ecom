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
    const isSidebar = useSelector((state) => state.sidebar)
    const isCartSidebar = useSelector((state) => state.cart)
    const isSearchBox = useSelector((state) => state.searchBox)

    return (
        <div className={`overflow-hidden ${isDark ? 'bg-[#101019] text-white' : 'bg-white'} transition-colors duration-300 text-center font-[poppins]`}>
            <Navbar isDark={isDark} />
            {isSearchBox ? <SearchBox /> : ''}
            {isSidebar ? <Sidebar /> : ''}
            {isCartSidebar ? <CartSidebarr /> : ''}
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