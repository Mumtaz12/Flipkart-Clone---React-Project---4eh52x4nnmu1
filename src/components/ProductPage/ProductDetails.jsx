import React, { useEffect, useState, useContext } from 'react'
import './productDetails.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import productData from "../../productData";
import { DetailContext } from '../../Router';
import { Details } from '@mui/icons-material';


function ProductDetails() {
    const { detail, setDetail } = useContext(DetailContext);
    const { idk } = useParams();
    const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
    const [data, setData] = useState([]);
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            let myData = [...data,...productData];
            // console.log("fetch data", data);
            console.log(myData);
            const valueData = myData.filter((value)=>value.id==idk)
            setData(valueData);
            // console.log(valueData);

        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {

        fetchUsers(url)
    }, [idk])
    // const valueData = data.filter((value)=>console.log(value.id==idk))
    // console.log(valueData);
    // console.log(data);
    const navigate = useNavigate();
    function handleBuy() {
        const vary = detail.filter((obj) => {
            return obj.id == data[0].id;
        })
        if (vary.length == 0) {

            data[0]['item'] = 1;
            setDetail([...detail, data[0]]);
        } else {
            alert("You have already added this product in your cart!")
        }
        navigate('/cart');
    }
    const handleCart = () => {
        const vary = detail.filter((obj) => {
            return obj.id == data[0].id;
        })
        if (vary.length == 0) {
            data[0]['item'] = 1;
          
            setDetail([...detail, data[0]]);
            
        } else {
            alert("You have already added this product in your cart!")
        }
    }


    const renderProduct = () => {
        if (data.length > 0) {
            return (
                <div className='productdetails'>
                    <div className="left__details">
                        <img src={data[0].image} alt="" />
                        <div className='add_and_buy'>
                            <button className='add_cart' onClick={handleCart} ><ShoppingCartIcon />ADD TO CART</button>
                            <button className='buy_now' onClick={handleBuy}><FlashOnIcon />BUY NOW</button>
                        </div>
                    </div>
                    <div className="right__details">
                        <h3>{data[0].title}</h3>

                        <div className='rating' style={{backgroundColor: data[0].rating.rate>=3? '#388e3c': 'red' }}>{data[0].rating.rate}<StarBorderIcon /></div>
                        <h2 style={{ color: "#388e3c" }}>Special offers</h2>
                        <div className='price'>₹ {data[0].price}</div>
                        <div className='offer__details'>
                            <h3>Available offers</h3>
                            <p><LocalOfferIcon /><strong>Bank Offer</strong>10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above</p>
                            <p><LocalOfferIcon /><strong>Bank Offer</strong>₹15 off on UPI Txns upto 5 times per user</p>
                            <p><LocalOfferIcon /><strong>Bank Offer</strong>5% Cashback on Flipkart Axis Bank Card</p>
                            <p><LocalOfferIcon />Buy this Product and Get Extra ₹500 Off on Bikes & Scooters</p>
                            <p><LocalOfferIcon /><strong>Partner Offer</strong>Shop With Flipkart Pay Later & stand a chance to win ₹500 Gift Card* during the offer period</p>
                            <p><LocalOfferIcon /><strong>Partner Offer</strong>Shop With Flipkart Pay Later & stand a chance to win ₹5,000 Gift Card* during the offer period</p>
                            <p><LocalOfferIcon /><strong>Partner Offer</strong>Purchase now & get a surprise cashback coupon till November 2023</p>
                        </div>
                        <div className='delivery'>
                            <div className="delivery_heading">
                                Delivery
                            </div>
                            <div className="delivery_details">
                                Delivery by Wed Mar 22 2023 | ₹40 Delivery charges
                            </div>
                        </div>
                        <div className='delivery'>
                            <div className="delivery_heading">
                                Warranty
                            </div>
                            <div className="delivery_details">
                                No Warrenty
                            </div>
                        </div>
                        <div className='delivery'>
                            <div className="delivery_heading">
                                Seller
                            </div>
                            <div className="delivery_details">
                                CORSECA <br />
                                GST invoice available
                            </div>
                        </div>
                        <div className='delivery'>
                            <img height="160px" src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" alt="" />
                        </div>
                        <div className='delivery'>
                            <div className="delivery_heading">
                                Description
                            </div>
                            <div className="delivery_details">
                                {data[0].description}
                            </div>
                        </div>

                    </div>
                </div>

            )
        }
    }
    return (
        <div>
            <Header />
            {renderProduct()}

        </div>

    )
}

export default ProductDetails