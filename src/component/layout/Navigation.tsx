import { LogInIcon, MoonIcon, Search, ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Context/ThemeContext";
import { CartCont } from "../../Context/CartContext";

function Navigation() {
  // Keep useState, default to true so mobile nav is visible
  const [isMobileOpen] = useState(true);
  const themeCtx = useContext(ThemeContext);
  const cart = useContext(CartCont);
  const itemCount = cart?.cartItems.length ?? 0;

  return (
    <div className=  "bg-white/95 dark:bg-gray-900 z-10 backdrop-blur-md shadow-lg sticky top-0 border-b border-gray-200 dark:border-gray-700 dark:text-white">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center ">
        
        {/* Logo / Icon */}
        <button className="flex items-center space-x-2 text-2xl font-bold">
          <ShoppingCart className="w-10 h-8 text-white bg-gradient-to-r from-pink-500 to-blue-900 rounded-full p-1" />
       <p className="flex text-[15px]"> Tina-Mart</p>
        </button>
   
        <nav className="space-x-[50px] px-[10px] ml-8 hidden md:block dark:text-white">
             <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/Catagory">Catagories</Link>
            <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
        </nav>
           <button className="flex w-[400px]  ml-6 border-1 border-gray-200 rounded-2xl p-2   ">

         <Search/>
          <input  type="text" className="px-4  bg-transparent" placeholder="Search..."/>
     
        </button>
        <div className="ml-[50px] mr-6">

  <button aria-label="Toggle theme" onClick={themeCtx?.toogleTheme}>
    <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-200"/>
  </button>
        </div> 
      
        <Link to="/cart" className="relative">
          <span className="inline-flex items-center justify-center rounded-full p-1 ">
            <ShoppingCart className="w-6 h-6 text-black" />
          </span>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-blue-900 text-white text-xs rounded-full px-2 py-0.5">
              {itemCount}
            </span>
          )}
        </Link>
         <button className="flex ml-6 p-1 rounded-xl border-1  text-blue-600 items-center px-3">
        <LogInIcon className="text-blue-600"/>
          <p className="px-2"> Login</p> 
         </button>
       
      </div>

      {/* Mobile Nav (controlled by isMobileOpen) */}
      {isMobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/Catagory">Catagories</Link>
            <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
          </nav>
        </div>
      )}
      
     
      
    </div>
  );
}

export default Navigation;
