
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">LuxeLane</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your one-stop shop for premium products and an exceptional shopping experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">All Products</Link></li>
              <li><Link to="/products?category=electronics" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Electronics</Link></li>
              <li><Link to="/products?category=jewelery" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Jewelry</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Stay Connected</h4>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600" />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 text-sm">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxeLane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
