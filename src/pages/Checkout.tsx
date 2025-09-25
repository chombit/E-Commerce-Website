import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  
  const { getTotalPrice, cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }
    
    setProcessing(true);
    
    try {
      const customerInfo = {
        name,
        email,
        address
      };
      
      // Mock checkout - just clear cart and navigate
      console.log('Checkout:', customerInfo, 'Total:', getTotalPrice());
      clearCart();
      navigate('/order-success');
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <form onSubmit={submit} className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping Information</h2>
        <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <Button type="submit" isLoading={processing}>Pay $  100</Button>
      </form>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
        <h3 className="font-semibold text-gray-900 dark:text-white">Order Summary</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Total: $  100</p>
      </div>
    </div>
  );
};

export default Checkout;
