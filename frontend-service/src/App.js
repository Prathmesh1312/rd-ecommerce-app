import './App.css';
import ProductCategoryPage from './pages/Category';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import Searchresult from './components/Searchresult';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/c/:categoryName" element={<ProductCategoryPage />} />
      <Route path="/search/:query" element={<Searchresult />} />
      <Route path='/product/:productId' element={<ProductDetails />} />
    </Routes>
  </Router>
  );
}

export default App;
