import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'


import { BrowserRouter } from 'react-router-dom'
import Themeprov from './Context/ThemeProvide'


import { CartProvider } from "./Context/CartContext.tsx"; // import your cart provider
createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <Themeprov>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </Themeprov>
  </StrictMode>
);

