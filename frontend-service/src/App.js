import './App.css';
import ProductCategoryPage from './pages/Category';
import HomePage from './pages/Homepage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/c/:categoryName" element={<ProductCategoryPage />} />
    </Routes>
  </Router>
  );
}

export default App;
