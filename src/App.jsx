import ResultProducts from './components/ResultProducts';
import ProductDetails from './components/ProductDetail';
import CheckoutPage from './components/CheckoutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import findingDat from './utils/searchProducts.js';
import { useSelector } from 'react-redux';
import SearchBox from './components/SearchBox.jsx';
import Sidebar from './components/Sidebar.jsx';
import CartSidebarr from './components/CartSidebarr.jsx';
import { products } from './assets/products.js';
import AllBrands from './components/AllBrands.jsx';
import ScrollToTop from './utils/ScrollTop.jsx';

const App = () => {

  const isSidebar = useSelector((state) => state.sidebar)
  const isCartSidebar = useSelector((state) => state.cart)
  const isSearchBox = useSelector((state) => state.searchBox)

  const searchVar = useSelector((state) => state.searchInput)
  const arr = findingDat(searchVar)


  return (
    <Router>
      <ScrollToTop />
      {isSearchBox ? <SearchBox /> : ''}
      {isSidebar ? <Sidebar /> : ''}
      {isCartSidebar ? <CartSidebarr /> : ''}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/brands' element={<AllBrands />} />
        <Route path='/products/:name' element={<ResultProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout/:id' element={<CheckoutPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/store' element={<ResultProducts results={arr} />} />
        <Route path='/products/best' element={<ResultProducts results={products.filter((elem) => (
            elem.bestseller
          )).map((elem, idx) => (
            elem
          ))} />} />     
          <Route path='*' element={<h1 className='text-center text-2xl font-bold'>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
