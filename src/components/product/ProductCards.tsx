
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="group relative flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 dark:bg-gray-700">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-300"
            style={{ height: '250px' }}
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link to={`/products/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.title}
          </Link>
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">{product.category}</p>
        <div className="flex-grow"></div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">${product.price.toFixed(2)}</p>
        <div className="mt-4">
          <Button onClick={handleAddToCart} className="w-full" variant="primary">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
