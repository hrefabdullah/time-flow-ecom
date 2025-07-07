import React from 'react';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';

const App = () => {
  const isDark = useSelector((state) => state.darkMode);
  const isSidebar = useSelector((state) => state.sidebar)

  return (
    <div className={`${isDark ? 'bg-[#101019] text-white' : 'bg-white'} transition-colors duration-300 w-screen h-screen text-center font-[poppins]`}>
      <Navbar isDark={isDark} />
      {isSidebar ? <Sidebar /> : ''}
    </div>
  );
};

export default App;
