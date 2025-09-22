import { Mail, MapPin, Phone, ShoppingCart } from "lucide-react"

function Header(){
    return(
    <div  className="bg-slate-900 text-gray-400 h-[500px]">
        <div className="grid grid-cols-4 grid-rows-1 pl-[200px] pt-[50px] gap-4  ">
            <div>
                <ShoppingCart className="my-[10px] text-blue-600 w-8 h-8"/>
                <p>Your one-stop destination for quality <br />products at great prices. Shop with <br />confidence and enjoy fast, reliable <br />delivery.</p>
                <ul className="mt-[20px]">
                    <li className=" flex py-1"> <Mail className="w-5 h-5 text-blue-500  mr-2" /> support@birhanu.et</li>
                    <li className=" flex py-1 "> <Phone className="w-5 h-5 text-blue-500 mr-2" /> +2519999999</li>
                    <li className=" flex py-1">  <MapPin className="w-5 h-5 text-blue-500  mr-2" />Addis Ababa, Ethiopia</li>
                </ul>
 
            </div>
            <div className="pl-[50px] my-[10px]">
               <h4 className="font-bold text-xl text-white pb-4"> Shop</h4>

  <li>All Products</li>
    <li>Electronics</li>
  <li> Clothing</li> 
   <li> Books</li> 
            </div>
            <div className="my-[10px]">
                         <h4 className="font-bold text-xl text-white pb-4"> Support</h4>
  <li> Help Center</li>
    <li>   Contact Us</li>
  <li>  Shipping Info</li> 
   <li>    Returns</li> 
            </div>
                     <div className="my-[10px]">
                         <h4 className="text-bold text-xl text-white pb-4" > Company</h4>
  <li>    About Us</li>
    <li>       Careers</li>
  <li>  Privacy Policy </li> 
   <li>   Terms of Service </li> 
            </div>


        </div>
        <hr  className="ml-[200px]  mr-[100px] bg-gradient-to-r from-white to-gray-400"/>
        <div className=" pl-[200px] pt-[50px]">
            <h5 className="font-bold">Stay Updated</h5>
            <p>

Get the latest deals and product updates
</p>
        </div>
    </div>
    )
}
export default Header
