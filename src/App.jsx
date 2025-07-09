import React from 'react';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import Crousal from './components/Crousal';
import CartSidebar from './components/CartSidebarr'
import Cataloge from './components/Cataloge';
import Quote from './components/Quote';
import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
  const isDark = useSelector((state) => state.darkMode);
  const isSidebar = useSelector((state) => state.sidebar)
  const isCartSidebar = useSelector((state) => state.cart)

  return (
    <div className={`overflow-hidden ${isDark ? 'bg-[#101019] text-white' : 'bg-white'} transition-colors duration-300 text-center font-[poppins]`}>
      <Navbar isDark={isDark} />
      {isSidebar ? <Sidebar /> : ''}
      {isCartSidebar ? <CartSidebar />: ''}  
      <Crousal />
      <Cataloge name={'New Arrivals'} type={'new'} />
      <Quote />  
      <Category type={'gender'} />   
      <Cataloge name={'Best Sellers'} type={'best'} />
      <Category type={'brands'} />
      <Footer />
    </div>
  );
};

export default App;
