import React, { useContext, useState, useEffect } from 'react'
import './checkout.css';
import { Modal } from 'antd';
import BuyProduct from '../BuyProduct/BuyProduct';
import { DetailContext } from '../../Router';
import Header from '../Header/Header';
import { Link, useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Footer from "../Footer/Footer";

function Checkout() {
    const navigate = useNavigate();

    const { detail, setDetail } = useContext(DetailContext);
    let totalPrice = detail.map((data) => {
        return (data.price)*(data.item);
    })
    const sum = totalPrice.reduce((partialSum, a) => partialSum + a, 0);
    // const psum = (parseFloat(sum)).toFixed(2);
    const [price, setPrice] = useState(parseInt(sum));
    const[numberitem, setNumberItem] = useState(detail.length);
    const [addressmodal, setAddressmodal] = useState(false);
    const handlePayment = () => {
        setAddressmodal(false);

    }

    const onCheckout = () => {

        if (localStorage.getItem("userLoggedIn") !== null) {
            setAddressmodal(true);
        } else {
            alert("You have to log in first");
        }

    }
    const offer = price > 70 ? (price/10).toFixed(2) : 0;
    const tprice = (price - offer).toFixed(2);
    console.log('deatil', detail);
    const removeItem = (removePd) => {
        let removed = detail.filter((item) => item.id !== removePd);
        let plus = detail.filter((item) => item.id === removePd);
        setPrice(price - parseInt(plus[0].price)*plus[0].item)
        setNumberItem(numberitem-plus[0].item);
        setDetail(removed);
    }
    function itemPlus(id) {
        let plus = detail.filter((item) => item.id === id);
        if (plus[0].item < 3) {
            plus[0]['item'] = parseInt(plus[0].item) + 1;
            setPrice(price + parseInt(plus[0].price))
            setNumberItem(numberitem+1);
            navigate('/cart')
        } else {
            alert('You can add upto maximum 3');
        }
    }
    setDetail(detail);
    function itemMinus(id) {
        let plus = detail.filter((item) => item.id === id);
        if (plus[0].item > 1) {
            plus[0]['item'] = parseInt(plus[0].item) - 1;
            setNumberItem(numberitem-1);
            setPrice(price - parseInt(plus[0].price))
            navigate('/cart')
        } 
        // else {
        //     // setNumberItem(numberitem-1);
        //     // setPrice(price - parseInt(plus[0].price))
        //     removeItem(plus[0].id);
        //     navigate('/cart')
        // }

    }
    function handleCartClear(){
        setDetail([]);
    }

    return (
        <>
            <Header />
            {detail.length > 0 ? (<div className="checkout">
                <div className="left_page">
                    <div className="itemlist">
                        {detail.map((data) => <div className="itemcheckout">
                            <div>
                                <img height="130px" src={data.image} alt="" />
                                <div>
                                    <div className='itemquantity'>
                                    <button onClick={() => itemMinus(data.id)}><RemoveCircleIcon/></button>
                                    <strong>Item: {data.item}</strong>
                                    <button onClick={() => itemPlus(data.id)}><AddCircleIcon/></button>
                                    </div>
                                    <span><button onClick={() => removeItem(data.id)} className='removebtn'>Remove</button></span>
                                </div>
                            </div>
                            <div className='titledetails'>
                                <p>{data.title}</p>
                                <h3>Black</h3>
                                <p>Seller:Noymi</p>
                                <p>रु{data.price}</p>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="right_page">
                        <span className='price_det'>PRICE DETAILS</span>
                        <div className="discount">
                            <div className="price_item">
                                <div>
                                    Price - {numberitem}
                                </div>
                                <div>
                                    रु. {price}
                                </div>
                            </div>
                            <div className="price_item">
                                <div>
                                    Discount
                                </div>
                                <div>
                                    - रु. {offer}
                                </div>
                            </div>
                            <div className="price_item">
                                <div>
                                    Delivery Charges
                                </div>
                                <div>
                                    Free
                                </div>
                            </div>
                            <div className=" item1">
                                <div>
                                    Total Amount
                                </div>
                                <div>
                                    रु. {tprice}
                                </div>
                            </div>

                        </div>
                        <div className="saverupee">
                            You will save रु. {offer} on this order
                        </div>

                        <div className='btndetails'>
                            <button onClick={onCheckout}>CheckOut</button>
                            <Modal open={addressmodal} footer={null} bodyStyle={{ height: "500px" }} className="addressmodal">
                                <BuyProduct handlePayment={handlePayment} tprice={tprice} handleCartClear={handleCartClear} />
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>) : (<div>

                <div className='emptymain'>
                    <div className='empty2'>
                        <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                        <div className='empty3'>Your cart is empty!</div>
                        <div className='empty4'>Add items to it now.</div>
                        <Link to={"/"}>
                            <button className='empty5'>Shop now</button>
                        </Link>
                    </div>
                </div>
            </div>)
            }
            <Footer/>
        </>
    )
}

export default Checkout