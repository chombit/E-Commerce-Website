import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const OrderSuccess: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Order Successful!</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">Thank you for your purchase.</p>
      <Link to="/"><Button className="mt-6">Back to Home</Button></Link>
    </div>
  );
};

export default OrderSuccess;
