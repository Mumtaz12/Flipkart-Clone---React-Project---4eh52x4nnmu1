import React, {useEffect, useState} from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useDispatch,useSelector} from 'react-redux';
import LoginModel from "../0LoginModel/LoginModel";
import {removeUser} from "../../slices/userSlice";


const NavBar=()=>{
    const [isOpen ,setIsOpen]=useState(false);
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.userData.user);
    useEffect(()=>{
        if (user){
            setIsOpen(false);
        }
    },[user]);
    const singnOut=async()=>{
        const {error}=await supabase.authenticatorData.signOut();
        if(!error){
            dispatch(removeUser());
        }
    }

    return(
        <>
        <div className="navbar-container">

            <div className="navbar">
                <Link to={"/"}>
                    {/*<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt='flipkart logo' style={{ width: 75 }} />*/}
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png"
                         alt="Flipcartlogo"
                         className="navbar-logo"/>
                </Link>
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search for Products,brands and more"
                        className="navbar-searchbox"
                    />
                    <button className="searchbtn">
                        <IoSearch />
                    </button>
                </div>
                {user ? (
                    <h3 onClick={signOut}>@{user?.email.slice(0, 10)}</h3>
                ) : (
                    <button className="navbar-btn" onClick={() => setIsOpen(true)}>
                        Login   </button>
                 )}

                <div className="navbar-more">
                    <h3>
                        More{" "}
                        <i className="moredown">
                            <MdKeyboardArrowDown />
                        </i>
                    </h3>
                </div>
                <div className="navbar-cart">
                    <div className="cart-icon">
                        <FaShoppingCart />
                    </div>
                    <Link to={"/cart"} className="cart">
                        Cart
                    </Link>
                </div>
            </div>
            <LoginModel isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </>
    );
}
export default NavBar;