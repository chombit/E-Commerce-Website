import { LogInIcon, MoonIcon, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // Keep useState, default to true so mobile nav is visible
  const [isMobileOpen] = useState(true);

  return (
    <div className=  "bg-white/95 z-10 backdrop-blur-md shadow-lg sticky top-0 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center ">
        
        {/* Logo / Icon */}
        <button className="flex items-center space-x-2 text-2xl font-bold">
          <ShoppingCart className="w-8 h-8 text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-full p-1" />
      
        </button>

        {/* Desktop Nav */}
        <nav className="space-x-[50px] px-[10px] ml-8 hidden md:block">
             <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/Catagory">Catagories</Link>
            <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
        </nav>
           <button className="flex w-[400px]  ml-6 border-1 border-gray-200 rounded-2xl p-2 shadow-2xl shadow-gray-300  ">

         <Search/>
          <input  type="text" className="px-4  " placeholder="Search..."/>
     
        </button>
        <div className="ml-[50px] mr-6">

  < MoonIcon/>
        </div> 
      
        <ShoppingCart/>
         <button className="flex ml-6 p-1 border-2 border-blue-600 rounded-xl">
        <LogInIcon className="text-blue-600"/>
          <p className="px-4 text-blue-600"> Login</p> 
         </button>
       
      </div>

      {/* Mobile Nav (controlled by isMobileOpen) */}
      {isMobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
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
