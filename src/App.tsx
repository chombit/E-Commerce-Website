import Home from "./pages/Home"
import Navigation from "./component/layout/Navigation"
import { Routes, Route } from "react-router-dom"
import Product from "./pages/product"
import Footer from "./component/layout/Footer"

function App() {
  return (
    <>
       <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
        <Footer />
    </>
   
   
    

  )
}

export default App
