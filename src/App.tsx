import Home from "./pages/Home"
import Navigation from "./component/layout/Navigation"
import { Routes, Route } from "react-router-dom"
import Product from "./pages/product"
import Header from "./component/layout/Header"

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
