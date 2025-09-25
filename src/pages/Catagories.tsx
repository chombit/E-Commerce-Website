import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Catagory(){
    return(
        <div className="h-screen bg-gray-50">
        <div className="
        justify-center items-center pt-6">
            <h1 className="font-bold text-4xl ml-[700px]">Product Categories</h1>
            <p className="ml-[500px] text-[20px]">Explore our wide range of product categories and find exactly what you're looking <br /> <span className="ml-[200px]">for</span></p>
        </div>
        <div>
            <ul className="flex  ml-[200px]  space-x-10 pt-16">
                <li className=" rounded-2xl shadow-lg bg-white p-[80px] py-[50px]">
                    <div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-800  ml-13 mb-2 w-17 h-17 "><p className="flex justify-center pt-4 font-bold text-white text-2xl">E</p>
                    </div> <p className="font-bold text-[20px] pl-[30px]">Electonics <br /></p>
                <span className="font-light text-[15px] ">Discover Amazing Electonics</span> <br />
              <span className="font-light text-[15px] flex justify-center"> Product</span> 
                <Link to="/product?category=electronics">
              <a href="" className="pl-[50px] pt-6 text-blue-700 flex"> Explore <span >< ArrowRight className="ml-4"/></span></a>
               </Link>
                </li>
                <li className="rounded-2xl shadow-lg bg-white p-[100px] py-[50px]"><div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-800  ml-13 mb-2 w-17 h-17  "><p className="flex justify-center pt-4 font-bold text-white text-2xl">J</p></div><p className="font-bold text-[20px]  pl-[50px]">Jewlery</p> <span className="font-light text-[15px] ">Discover Amazing Electonics</span> <br />
              <span className="font-light text-[15px] flex justify-center"> Product</span>  <Link to="/product?category=jewelery">
              <a href="" className="pl-[50px] pt-6 text-blue-700 flex"> Explore <span >< ArrowRight className="ml-4"/></span></a>
               </Link></li>
                <li className=" rounded-2xl shadow-lg bg-white  p-[80px]  py-[50px]"><div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-800  ml-13 mb-2 w-17 h-17  "><p className="flex justify-center pt-4 font-bold text-white text-2xl">M</p></div><p className="font-bold text-[20px] pl-[30px]">men`s clothung</p><span className="font-light text-[15px] ">Discover Amazing Electonics</span> <br />
              <span className="font-light text-[15px] flex justify-center"> Product</span>
               <Link to="/product?category=men's clothing">
              <a href="" className="pl-[50px] pt-6 text-blue-700 flex"> Explore <span >< ArrowRight className="ml-4"/></span></a>
               </Link></li>
                <li className="rounded-2xl shadow-lg bg-white  p-[80px] py-[50px]"><div className="rounded-full bg-gradient-to-r from-blue-600 to-purple-800  ml-13 mb-2  w-17 h-17"><p className="flex justify-center pt-4 font-bold text-white text-2xl">W</p></div><p className="font-bold text-[20px] pl[80px]">women clothing</p><span className="font-light text-[15px] ">Discover Amazing Electonics</span> <br />
               <span className="font-light text-[15px] flex justify-center"> Product</span>
               <Link to="/product?category=women's clothing">
              <a href="" className="pl-[50px] pt-6 text-blue-700 flex"> Explore <span >< ArrowRight className="ml-4"/></span></a>
               </Link></li>
            </ul>
        </div>
        <div className=" mt-[100px] pt-[30px] rounded-2xl border-1 ml-[400px] w-[1000px] h-[200px] bg-gradient-to-r from-blue-700 to-purple-800 text-white">
            <p className="flex justify-center text-3xl font-bold">Can't find what you're looking for?</p><br />
            <p className="flex justify-center">Browse all our products and discover something new</p>
            <Link to="/product" className="border-1 bg-white text-blue-700 font-bold flex justify-center ml-[400px] mt-[20px] p-3 rounded-2xl">
                View All Product <span><ArrowRight/></span>
            </Link>
        </div>
       
        </div>
    )
}
export default Catagory

