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
import Testimonials from './components/Testimonials';
import SearchBox from './components/SearchBox';
import ResultProducts from './components/ResultProducts';
import findingDat from './utils/searchProducts';

const App = () => {

  const searchVar = useSelector((state) => state.searchInput)
  const arr = findingDat(searchVar)

  const isDark = useSelector((state) => state.darkMode);
  const isSidebar = useSelector((state) => state.sidebar)
  const isCartSidebar = useSelector((state) => state.cart)
  const isSearchBox = useSelector((state) => state.searchBox)

  return (
    <div className={`overflow-hidden ${isDark ? 'bg-[#101019] text-white' : 'bg-white'} transition-colors duration-300 text-center font-[poppins]`}>
      <Navbar isDark={isDark} />
      {/* {isSearchBox ? <SearchBox /> : ''} */}
      <ResultProducts results={arr} />
      {/* {isSidebar ? <Sidebar /> : ''}
      {isCartSidebar ? <CartSidebar />: ''}  
      <Crousal />
      <Cataloge name={'New Arrivals'} type={'new'} />
      <Quote />  
      <Category type={'gender'} />   
      <Cataloge name={'Best Sellers'} type={'best'} />
      <Category type={'brands'} />
      <Testimonials />
      <Footer /> */}
    </div>
  );
};

export default App;
