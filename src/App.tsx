import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/1" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/article" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;