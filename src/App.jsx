import ResultProducts from './components/ResultProducts';
import ProductDetails from './components/ProductDetail';
import CheckoutPage from './components/checkoutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import findingDat from './utils/searchProducts.js';
import { useSelector } from 'react-redux';

const App = () => {


  const searchVar = useSelector((state) => state.searchInput)
  const arr = findingDat(searchVar)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ResultProducts results={arr} />} />
        <Route path='/products/:name' element={<ResultProducts />} />
        <Route path='/products/:gender' element={<ResultProducts />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/checkout/:id' element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
