import React from 'react';
import { Link } from 'react-router-dom';
import type { CartItem as CartItemType } from '../../types';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="w-24 h-24 flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-contain rounded-md" />
      </div>
      <div className="ml-4 flex-1">
        <Link to={`/products/${item.id}`} className="text-lg font-medium hover:text-primary-600 dark:hover:text-primary-400">{item.title}</Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button onClick={() => handleQuantityChange(item.quantity - 1)} className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50" disabled={item.quantity <= 1}>
            <Minus className="w-4 h-4" />
          </button>
          <span className="mx-3 w-8 text-center">{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.quantity + 1)} className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="ml-4 flex flex-col items-end">
        <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)} className="mt-2 text-red-500 hover:text-red-700">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
