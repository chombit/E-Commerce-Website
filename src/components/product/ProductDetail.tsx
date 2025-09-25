import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../../services/api';
import type { Product } from '../../types';
import Button from '../ui/Button';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useCart } from '../../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await ApiService.getProduct(Number(id));
        setProduct(data);
      } catch {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <div className="py-10"><LoadingSpinner className="mx-auto" /></div>;
  if (error || !product) return <div className="py-10 text-center text-red-600">{error || 'Not found'}</div>;

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img src={product.image} alt={product.title} className="w-full h-96 object-contain" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{product.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{product.description}</p>
        <p className="mt-4 text-2xl font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</p>
        <Button className="mt-6" onClick={() => addToCart(product, 1)}>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductDetail;
