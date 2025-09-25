import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, clearCart, getTotalItems } = useCart();
  const count = getTotalItems();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Cart</h1>

      {count === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Browse products and add items to your cart.</p>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{count} item{count !== 1 ? 's' : ''} in your cart</p>
              <button onClick={clearCart} className="text-red-600 hover:text-red-700 text-sm">Clear cart</button>
            </div>
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
