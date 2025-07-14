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

const App = () => {

  const isSidebar = useSelector((state) => state.sidebar)
  const isCartSidebar = useSelector((state) => state.cart)
  const isSearchBox = useSelector((state) => state.searchBox)

  const searchVar = useSelector((state) => state.searchInput)
  const arr = findingDat(searchVar)

  return (
    <Router>
      {isSearchBox ? <SearchBox /> : ''}
      {isSidebar ? <Sidebar /> : ''}
      {isCartSidebar ? <CartSidebarr /> : ''}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ResultProducts results={arr} />} />
        <Route path='/products/:name' element={<ResultProducts />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout/:id' element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
