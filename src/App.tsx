
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductDetail from './components/product/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
         <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="*" element={<div className="container mx-auto px-4 py-10">Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

