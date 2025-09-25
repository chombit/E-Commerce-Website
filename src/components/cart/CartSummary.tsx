import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const CartSummary: React.FC = () => {
  const { getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md lg:sticky lg:top-24">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-200 dark:border-gray-700">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/checkout" className="block">
          <Button className="w-full" size="lg">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
