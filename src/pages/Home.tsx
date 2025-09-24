import { AlignRight, ArrowLeft, ArrowRight, CarIcon, Check, Mail, RefreshCcw, Shield, ShoppingCart, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import Api, { type Product } from "../services/Apic"; 


function Home() {
  const [post, setPost] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const goPrev = () =>
    setCurrentIndex((i) => (post.length ? (i - 1 + post.length) % post.length : 0));
  const goNext = () =>
    setCurrentIndex((i) => (post.length ? (i + 1) % post.length : 0));
  const goTo = (i: number) => setCurrentIndex(i);

  useEffect(() => {
    Api.getAllProduct()
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
  if (post.length === 0) return;

  const timer = setInterval(() => {
    goNext();
  }, 7000);

  return () => clearInterval(timer);
}, [post, currentIndex]);

  return (
    <>

    <div className="bg-gradient-to-tl from-pink-600 to-blue-900 h-screen text-white overflow-auto grid grid-cols-2">
      {/* Header */}
      <div>
      
        <p className=" flex justify-center mt-[200px] w-[250px] ml-[320px]  bg-white/30 p-[10px] rounded-3xl font-bold text-white">
          🎉 New arrivals every week
        </p>
      

      <h1 className="pl-[320px] pt-6 text-7xl font-bold">
        Welcome to B- <br /> Shop
      </h1>

      <p className="pl-[320px] pt-6 text-[20px]">
        Discover amazing products at unbeatable prices with lightning-
        <br /> fast delivery and exceptional customer service
      </p>

      {/* Buttons */}
      <div className="flex flex-row pl-[320px] pt-4">
        <button className="flex items-center gap-2 px-6 py-3 rounded-lg text-blue-600 font-semibold bg-white transform hover:scale-107">
          <span>Shop Now</span>
          <span>
            <ArrowRight />
          </span>
        </button>

        <button className="bg-transparent border-2 px-7 py-3 font-bold backdrop-blur-sm rounded-lg ml-6 text-white hover:bg-white hover:text-blue-600 transform hover:scale-107 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
          Browse Categories
        </button>
      </div>

      {/* Stats */}
      <div className="pl-[320px] grid grid-cols-3 gap-1 w-[1100px] mt-6 text-2xl">
        <p>
          <span className="font-bold">50K+</span> <br />
          <span className="text-[15px]">Happy Customers</span>
        </p>
        <p>
          <span className="font-bold">1M+</span> <br />
          <span className="text-[15px]">Products Sold</span>
        </p>
        <p>
          <span className="font-bold">50+</span> <br />
          <span className="text-[15px]">Countries</span>
        </p>
      </div>
</div>
      {/* Product Carousel */}
      <div className="relative flex flex-col items-center justify-center p-10">
        {post.length > 0 && (
          <div key={post[currentIndex].id} className="relative w-[600px] h-[700px] text-center bg-white/10 rounded-2xl p-8 shadow-xl overflow-hidden">
            <img
              src={post[currentIndex].image}
              alt={post[currentIndex].title}
              className="h-72 mx-auto object-contain drop-shadow-xl"
            />
            <h3 className="mt-24 text-2xl font-semibold">
              {post[currentIndex].title}
            </h3>
            <div className="mt-2 text-yellow-300">
              ⭐ {post[currentIndex].rating.rate}
              <span className="ml-1 text-white/70">({post[currentIndex].rating.count})</span>
            </div>
            <div className="mt-3 text-4xl font-bold text-green-300">
              ${post[currentIndex].price}
            </div>
            <div className="mt-3 inline-block px-3 py-1 rounded-full bg-white/20 text-white/90">
              {post[currentIndex].category}
            </div>
             {post.length > 0 && (
          <>
            <button aria-label="Previous" onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full">‹</button>
            <button aria-label="Next" onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full">›</button>
          </>
        )}
          </div>
        )}

        {/* Arrows */}
       

        {/* Dots */}
        {post.length > 0 && (
          <div className="mt-6 flex justify-center gap-3">
            {post.slice(0, 6).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full ${i === currentIndex ? "bg-white" : "bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
    </div>
    <div className="bg-white/50">
      <div >
    <h1 className="pt-[20px] font-bold text-3xl flex justify-center items-center ">why Choose B-Shop</h1>
    <p className="flex justify-center items-center p-3 text-xl">We provide the best shopping experience with these features</p>
    <ul className="flex pl-[350px]   space-x-7 mt-10">
     <li className="px-[40px] shadow-sm bg-white shadow-gray-400 border-0 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg"> <div className="bg-blue-100 w-15 h-15 p-3 mb-7  ml-20  rounded-full">
        <Truck className="w-8 h-8 text-blue-500 " />
      </div> <span className="flex justify-center">Free Shipping</span>

Free shipping on orders over  <br /><span className="flex justify-center">$100</span></li>
        <li className="px-[40px] bg-white shadow-sm shadow-gray-400 border-0 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg"><div className="bg-blue-100 w-15 h-15 p-3  mb-7  ml-20  rounded-full">
          <Shield className="w-8 h-8 text-blue-500" />
        </div><span className="flex justify-center">Secure Payment</span>

Your payment information is <br /> <span className="flex justify-center">secure</span></li>
          <li className="px-[60px] bg-white shadow-sm shadow-gray-400 border-0 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg"> <div className="bg-blue-100 w-15 h-15 p-3  mb-7  ml-15 rounded-full">
          <RefreshCcw className="w-8 h-8 text-blue-500" />
        </div> <span className="flex justify-center">Easy Returns</span> 

30-day return policy</li>
            <li className="px-[50px] bg-white border-0 shadow-sm shadow-gray-400 rounded-2xl py-14 mr-6 hover:transform transition scale-100 hover:shadow-lg ">  <div className="bg-blue-100 p-3  w-15 h-15   mb-7  ml-15 rounded-full">
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
    <div className="border-0 rounded-2xl h-[550px] bg-white shadow-md shadow-gray-400 p-1">
      <p className="inline-block self-start border-0 rounded-3xl px-3 py-1 text-[12px] bg-gradient-to-r from-blue-700 to-pink-400 text-white font-bold mb-2">
        {pon.category}
      </p>
      <img className="w-[300px] h-[250px] object-contain" src={pon.image} alt="" />
      <h1 className="pl-3 py-1 font-bold" dangerouslySetInnerHTML={{ __html: limi(pon.title) }} />
      <div className="flex items-center gap-2 text-sm pl-3">
        <span className="text-yellow-800">⭐⭐⭐☆☆ {pon.rating.rate}</span>
        <span className="text-gray-500 text-xs">({pon.rating.count})</span>
      </div>
      <p className="pl-3 pt-1 text-[25px] font-bold text-green-500">${pon.price}</p>
      <p className="p-3 text-black/60" dangerouslySetInnerHTML={{ __html: limitation(pon.description) }} />
      <button className="flex items-center justify-center text-white font-bold bg-gradient-to-r from-blue-600 to-pink-600 p-2 ml-2 rounded-2xl w-[250px]">
        <ShoppingCart  className="mr-[10px]"/> Add to Cart
      </button>
    </div>
  ))}
</div>

{/* Second 4 Products */}
<div className="grid grid-cols-4 gap-[40px] items-center align-middle ml-[300px] p-6 w-[1300px]">
  {post.slice(4, 8).map((pon) => (
    <div className="border-0 rounded-2xl h-[530px] bg-white shadow-md shadow-gray-400 p-1">
      <p className="inline-block self-start border-0 rounded-3xl px-3 py-1 text-[12px] bg-gradient-to-r from-blue-700 to-pink-400 text-white font-bold mb-2">
        {pon.category}
      </p>
      <img className="w-[300px] h-[250px] object-contain" src={pon.image} alt="" />
      <h1 className="pl-3 py-1 font-bold" dangerouslySetInnerHTML={{ __html: limi(pon.title) }} />
      <div className="flex items-center gap-2 text-sm pl-3">
        <span className="text-yellow-800">⭐⭐⭐☆☆ {pon.rating.rate}</span>
        <span className="text-gray-500 text-xs">({pon.rating.count})</span>
      </div>
      <p className="pl-3 pt-1 text-[25px] font-bold text-green-500">${pon.price}</p>
      <p className="p-3 text-black/60" dangerouslySetInnerHTML={{ __html: limitation(pon.description) }} />
      <button className="flex items-center justify-center text-white font-bold bg-gradient-to-r from-blue-600 to-pink-600 p-2 ml-2 rounded-2xl w-[250px]">
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
