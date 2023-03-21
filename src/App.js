import React, {useEffect, useState} from 'react'
import './styles/App.css';
import Home from "./pages/Home/Home";
import {HashRouter,Routes,Route} from "react-router-dom";
import Products from "./pages/Products/Products";
import ProductsDetails from "./pages/ProductsDetails/ProductsDetails";
import Cart from "./pages/Cart/Cart";
import axios from 'axios';
import NavBar from "./components/0NavBar/NavBar";
import {Provider,useDispatch} from"react-redux";
import {store} from "./components/app/store";
import supabase from "./supabase";



const App = () => {
  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log(error);
    } else if (data) {
      localStorage.setItem('user', JSON.stringify(data.session.user));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);
//     const [cart, setCart] = useState([]);
// const dispatch=useDispatch();
// const getUser=async ()=>{
//     const {data,error}=await supabase.auth.getSession();
//     console.log(data);
// };
// useEffect(()=>{
//     getUser().then(r => r);
// },[]);



  return (
<div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/productdetails/:id" element={<ProductsDetails />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
</div>
  );

};


export default App;
