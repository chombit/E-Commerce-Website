import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, ShoppingCart, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const isLoggedIn = false;
  const user = null as { username: string } | null;
  const theme = 'light';

  const logout = () => {
    // Mock logout
  };

  const navLinks = [
    { to: '/logo', text: 'TinaMart' },    
    { to: '/', text: 'Home' },
    { to: '/products', text: 'Products' },
    { to: '/categories', text: 'Categories' },
    { to: '/about', text: 'About' },
    { to: '/contact', text: 'Contact' },
  ];

  const activeLinkClass = "text-brand";
  const inactiveLinkClass = "hover:text-brand transition-colors";

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
               <Logo size="md" />
            </Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>
            <Link to="/cart" className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="hidden md:block">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm">Hi, {user?.username}</span>
                  <Button onClick={logout} size="sm" variant="outline">Logout</Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link to="/login" className="text-sm hover:text-brand">Login</Link>
                  <Link to="/signup" className="inline-flex items-center justify-center font-semibold rounded-lg px-4 py-2 text-white bg-brand bg-brand-hover transition-colors">Sign Up</Link>
                </div>
              )}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Open menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 pt-2">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.text}
                </NavLink>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                {isLoggedIn ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Hi, {user?.username}</span>
                    <Button onClick={() => { logout(); setIsMenuOpen(false); }} size="sm" variant="outline">Logout</Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block text-center w-full font-semibold rounded-lg px-4 py-2 border border-brand text-brand">Login</Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block text-center w-full font-semibold rounded-lg px-4 py-2 text-white bg-brand bg-brand-hover transition-colors">Sign Up</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;