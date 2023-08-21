import React,{useState,createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Checkout from './components/Checkout/Checkout'
import ProductDetails from './components/ProductPage/ProductDetails'
import RegisterPage from './components/Register/RegisterPage'
import WishlistPage from './components/Header/WishlistPage'

export const DetailContext = createContext();

function Router() {
 
  const[detail, setDetail] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Store wishlist items

  return (
    <>
    {/* <ProductDetails/> */}
    <DetailContext.Provider value={{detail, setDetail ,wishlist ,setWishlist}} >

   <BrowserRouter>

   <Routes>
       <Route path='/wishlist' element={<WishlistPage />} />
    <Route path='/' element={<App />}/>
    <Route path='/product/:idk' element={<ProductDetails />} />
    <Route path='/cart' element={<Checkout />} />
    <Route path='/register' element={<RegisterPage />} />
   </Routes>
   </BrowserRouter>
    </DetailContext.Provider>
    {/*<div style={{display: "flex", textAlign: "center", padding: "2px 250px" }} className='footer'>*/}
    {/*  <h5>Designed and developed by</h5> :-> <h4>Mohammad Mumtaz</h4>*/}
    {/*  </div>*/}
  
     
   </>
  )
}

export default Router