import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AppRoute from './routes/AppRoute.jsx';
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import { AuthProvider } from './contexts/AuthContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import { OrderProvider } from './contexts/OrderContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <AppRoute/>
          </BrowserRouter> 
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
   </StrictMode> 
)
