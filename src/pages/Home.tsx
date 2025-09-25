
import { Link } from 'react-router-dom';

import { ArrowRight, Check, Mail, RefreshCcw, Shield, ShoppingCart, Star, Truck } from "lucide-react";
import { useEffect, useState,useContext } from "react";
import { Api } from "../services/Apic";
import type { Product } from "../types";



import { CartCont } from "../Context/CartContext";
function Home() {
  const cartt=useContext(CartCont)
  const [post, setPost] = useState<Product[]>([]);

    function limi(title:string){
      if(title.length >25){
        return title.substring(0,20)+'...'
      }else{
        return title;
      }
    }
  function limitation(description:string){
      if (description.length>100 ){
        return description.substring(0,80) +'...'
      }
      else{
        return description;
      }
  }


  useEffect(() => {
    Api.getAllProduct()
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, []);




  return (

    <>
  <div className="min-h-[calc(100vh-8rem)]">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to TinaMart
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Your one-stop shop for all your needs. Discover amazing products at great prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product">
              <button className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg">
                Shop Now
              </button>
            </Link>
            <Link to="/product">
              <button className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold px-6 py-3 rounded-lg">
                Browse Categories
              </button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600 dark:text-gray-400">Get your orders delivered quickly and safely to your doorstep.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600 dark:text-gray-400">Your payment information is safe and secure with us.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-400">Our customer support team is always here to help you.</p>
          </div>
        </div>
         </div>
          </div>
   
    <div className="bg-white/50 dark:bg-gray-900 dark:text-white">
      <div >
    <h1 className="pt-[20px] font-bold text-3xl flex justify-center items-center ">why Choose B-Shop</h1>
    <p className="flex justify-center items-center p-3 text-xl">We provide the best shopping experience with these features</p>
    <ul className="flex pl-[350px]   space-x-7 mt-10">
     <li className="px-[40px] shadow-sm  bg-white shadow-gray-400 border-0 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg dark:bg-gray-800"> <div className="bg-blue-100 w-15 h-15 p-3 mb-7  ml-20  rounded-full">
        <Truck className="w-8 h-8 text-blue-500 " />
      </div> <span className="flex justify-center">Free Shipping</span>

Free shipping on orders over  <br /><span className="flex justify-center">$100</span></li>
        <li className="px-[40px] bg-white shadow-sm shadow-gray-400 border-0 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg dark:bg-gray-800"><div className="bg-blue-100 w-15 h-15 p-3  mb-7  ml-20  rounded-full">
          <Shield className="w-8 h-8 text-blue-500" />
        </div><span className="flex justify-center">Secure Payment</span>

Your payment information is <br /> <span className="flex justify-center">secure</span></li>
          <li className="px-[60px] bg-white shadow-sm shadow-gray-400 border-0 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg dark:bg-gray-800"> <div className="bg-blue-100 w-15 h-15 p-3  mb-7  ml-15 rounded-full">
          <RefreshCcw className="w-8 h-8 text-blue-500" />
        </div> <span className="flex justify-center">Easy Returns</span> 

30-day return policy</li>
            <li className="px-[50px] bg-white border-0 shadow-sm shadow-gray-400 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg dark:bg-gray-800">  <div className="bg-blue-100 p-3  w-15 h-15   mb-7  ml-15 rounded-full">
          <Star className="w-8 h-8 text-blue-500" />
        </div><span className="flex justify-center"> Quality Products</span> 

Only the best products <br /> <span className="flex justify-center">for you</span></li>
    </ul>
      </div>
      <div>
        <div className="mt-30">
          <h1 className="font-bold text-2xl flex justify-center ">Featured Product </h1>
          <p className="flex justify-center pt-4">Check out our most popular products</p>
        </div>
{/* First 4 Products */}
<div className="grid grid-cols-4 gap-[40px] items-center align-middle ml-[300px] p-6 w-[1300px]">
  {post.slice(0, 4).map((pon) => (
     <div key={pon.id} className="border-0 rounded-2xl h-[550px] bg-white shadow-md shadow-gray-400 p-1 dark:bg-gray-800 dark:text-white">
      <p className="inline-block self-start border-0 rounded-3xl px-3 py-1 text-[12px] bg-gradient-to-r from-blue-700 to-pink-400 text-white font-bold mb-2">
        {pon.category}
      </p>
      <img className="w-[300px] h-[250px] object-contain" src={pon.image} alt="" />
      <h1 className="pl-3 py-1 font-bold" dangerouslySetInnerHTML={{ __html: limi(pon.title) }} />
      <div className="flex items-center gap-2 text-sm pl-3">
        <span className="text-yellow-800">⭐ {pon.rating}</span>
      </div>
      <p className="pl-3 pt-1 text-[25px] font-bold text-green-500">${pon.price}</p>
      <p className="p-3 text-black/60 dark:text-white" dangerouslySetInnerHTML={{ __html: limitation(pon.description) }} />
      
      {/* ✅ Add to Cart Button */}
      <button
        onClick={() =>
          !cartt?.cartItems.some((i)=> i.id===pon.id.toString()) && cartt?.Adding_Products({
            id: pon.id.toString(),
            name: pon.title,
            price: pon.price,
            image: pon.image,
            quantity: 1,
          })
        }
        disabled={cartt?.cartItems.some((i)=> i.id===pon.id.toString())}
        className={`flex items-center justify-center text-white font-bold  p-2 ml-2 rounded-2xl w-[250px] ${cartt?.cartItems.some((i)=> i.id===pon.id.toString()) ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-pink-600'}`}
      >
        <ShoppingCart className="mr-[10px]" /> {cartt?.cartItems.some((i)=> i.id===pon.id.toString()) ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  ))}
</div>

{/* Second 4 Products */}
<div className="grid grid-cols-4 gap-[40px] items-center align-middle ml-[300px] p-6 w-[1300px] ">
  {post.slice(4, 8).map((pon) => (
    <div className="border-0 rounded-2xl h-[530px] bg-white shadow-md shadow-gray-400 p-1 dark:bg-gray-800 dark:text-white">
      <p className="inline-block self-start border-0 rounded-3xl px-3 py-1 text-[12px] bg-gradient-to-r from-blue-700 to-pink-400 text-white font-bold mb-2">
        {pon.category}
      </p>
      <img className="w-[300px] h-[250px] object-contain" src={pon.image} alt="" />
      <h1 className="pl-3 py-1 font-bold" dangerouslySetInnerHTML={{ __html: limi(pon.title) }} />
      <div className="flex items-center gap-2 text-sm pl-3">
        <span className="text-yellow-800">⭐ {pon.rating}</span>
      </div>
      <p className="pl-3 pt-1 text-[25px] font-bold text-green-500">${pon.price}</p>
      <p className="p-3 text-black/60 dark:text-white" dangerouslySetInnerHTML={{ __html: limitation(pon.description) }} />
      <button onClick={() =>
          cartt?.Adding_Products({
            id: pon.id.toString(),
            name: pon.title,
            price: pon.price,
            image: pon.image,
            quantity: 1,
          })
        } className="flex items-center justify-center text-white font-bold bg-gradient-to-r from-blue-600 to-pink-600 p-2 ml-2 rounded-2xl w-[250px]">
  <ShoppingCart className="mr-2" /> Add to Cart
</button>

    </div>
  ))}
  <button className="flex ml-[500px] bg-blue-600 w-[180px] h-[60px] items-center p-[10px] text-white rounded-2xl justify-center">
    View Product <ArrowRight className="text-white ml-2"/>
  </button>
</div>

      </div>
      <div className="h-[600px] bg-gradient-to-tl from-pink-600 to-blue-900 ">
        <div className="pl-[870px] pt-[80px]"> <span className="bg-white/40 w-20 h-20 flex justify-center items-center rounded-full"><Mail className="text-white w-8 h-8"/></span> 
       
      </div> 
      <p className="font-bold text-5xl ml-[790px] text-white mt-3">Stay Updated</p>
      <p className="ml-[680px] text-2xl pt-2 text-white/75">Get exclusive deals, new product alerts, and insider tips <br /> <span className="pl-[100px]">delivered to your inbox</span></p>
   <div className="flex ml-[690px] mt-[40px]">
    <form action="
    ">
      <input className="border-1 p-[15px] text-white  border-white rounded-2xl w-[400px]" type="text" placeholder ="Enter your email address" />
    </form>
    <button className=" flex justify-center bg-white text-blue-800 font-bold  ml-6 p-4 rounded-2xl w-[150px]">
      Subscribe <ArrowRight className="ml-3.5"/> 
    </button>
   </div>

   <ul className=" flex ml-[700px] space-x-7 mt-6 text-[15px] ">
    <li className="flex text-blue-300/80"><Check className="mr-3 flex items-baseline w-4 h-7" />No spam, ever</li>
     <li className="flex text-blue-300/80"><Check className="mr-3 flex items-baseline w-4 h-7" />Unsubscribe anytime</li>
      <li className="flex text-blue-300/80"><Check className="mr-3 flex items-baseline w-4 h-7" />Weekly updates</li>
   </ul>
   <div className="mt-[20px]">
    <ul className="flex ml-[580px] space-x-60">
      <li className="text-4xl font-bold text-white">10K+ <br /><span className="text-white/55 text-[15px]">Subscribers</span></li>
      <li  className="text-4xl font-bold text-white">98% <br /><span className="text-white/55 text-[15px]">Open Rate</span></li>
      <li className="text-4xl font-bold text-white">24h <br /> <span className="text-white/55 text-[15px]">Response Time</span></li>
    </ul>
   </div>

      </div>
    </div>
       </>
  );
}

export default Home;
