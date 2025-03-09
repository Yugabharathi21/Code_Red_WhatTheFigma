import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Article from './pages/Article';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoginPage && <Navigation />}
      <AnimatePresence mode="wait">
        <main className={`flex-1 ${isLoginPage ? '' : ''}`}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/shop" element={
              <PageTransition>
                <Shop />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
            <Route path="/product/:id" element={
              <PageTransition>
                <ProductDetail />
              </PageTransition>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/article" element={
              <PageTransition>
                <Article />
              </PageTransition>
            } />
          </Routes>
        </main>
      </AnimatePresence>
      {!isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;