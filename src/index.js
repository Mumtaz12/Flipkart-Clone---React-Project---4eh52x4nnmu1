import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './Components/Context/CartContext';
import AuthContextProvider from './Components/Context/Authcontext';
import { store } from './Redux/store';
import { Provider } from "react-redux";
import {WishlistContextProvider} from "./Components/Context/WishlistContext";



// import { extendTheme } from "@chakra-ui/react";
//
// const theme = extendTheme({
//     breakpoints: {
//         sm: "320px", // Small screens and up
//         md: "768px", // Medium screens and up
//         lg: "1024px", // Large screens and up
//         xl: "1440px", // Extra large screens and up
//     },
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <AuthContextProvider>
        <CartContextProvider>
          <WishlistContextProvider> {/* Add WishlistContextProvider */}
            <ChakraProvider >
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ChakraProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </Provider>
);
