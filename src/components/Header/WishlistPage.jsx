// import React, { useContext } from 'react';
// import Header from './Header';
// import Footer from '../Footer/Footer';
// import { DetailContext } from '../../Router';
// import { Link, useNavigate } from 'react-router-dom';
//
// const WishlistPage = () => {
//     const navigate = useNavigate();
//     const { wishlist, setWishlist } = useContext(DetailContext);
//
//     const removeItem = (removePd) => {
//         const updatedWishlist = wishlist.filter((item) => item.id !== removePd);
//         setWishlist(updatedWishlist);
//     };
//
//     const itemPlus = (id) => {
//         const updatedWishlist = wishlist.map((item) => {
//             if (item.id === id && item.item < 3) {
//                 return { ...item, item: item.item + 1 };
//             }
//             return item;
//         });
//         setWishlist(updatedWishlist);
//     };
//
//     const itemMinus = (id) => {
//         const updatedWishlist = wishlist.map((item) => {
//             if (item.id === id && item.item > 1) {
//                 return { ...item, item: item.item - 1 };
//             }
//             return item;
//         });
//         setWishlist(updatedWishlist);
//     };
//
//     const handleCartClear = () => {
//         setWishlist([]);
//     };
//
//     return (
//         <>
//             <Header />
//             {wishlist.length > 0 ? (
//                 <div className="checkout">
//                     <div className="left_page">
//                         <div className="itemlist">
//                             {wishlist.map((data) => (
//                                 <div className="itemcheckout" key={data.id}>
//                                     <div>
//                                         <img height="130px" src={data.image} alt="" />
//                                         <div>
//                                             <div className="itemquantity">
//                                                 <button onClick={() => itemMinus(data.id)}>-</button>
//                                                 <strong>Item: {data.item}</strong>
//                                                 <button onClick={() => itemPlus(data.id)}>+</button>
//                                             </div>
//                                             <span>
//                                                 <button onClick={() => removeItem(data.id)} className="removebtn">
//                                                     Remove
//                                                 </button>
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <div className="titledetails">
//                                         <p>{data.title}</p>
//                                         <h3>Black</h3>
//                                         <p>Seller: Noymi</p>
//                                         <p>रु{data.price}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="emptymain">
//                     <div className="empty2">
//                         <img
//                             src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
//                             alt=""
//                         />
//                         <div className="empty3">Your Wishlist is empty!</div>
//                         <div className="empty4">Add items to it now.</div>
//                         <Link to="/">
//                             <button className="empty5">Add now</button>
//                         </Link>
//                     </div>
//                 </div>
//             )}
//             <Footer />
//         </>
//     );
// };
//
// export default WishlistPage;











import React, {useContext, useState} from 'react';
import Header from "./Header";
import Footer from "../Footer/Footer";
import { DetailContext } from '../../Router';
import { Link, useNavigate } from 'react-router-dom';


const WishlistPage = () => {
    // Assume wishlistItems is the array you're trying to map over
    const navigate = useNavigate();

    const { wishlist ,setWishlist} = useContext(DetailContext);
    let totalPrice = wishlist.map((data) => {
        return (data.price)*(data.item);
    })
    const sum = totalPrice.reduce((partialSum, a) => partialSum + a, 0);
    const [price, setPrice] = useState(parseInt(sum));
    const[numberitem, setNumberItem] = useState(wishlist.length);
    const removeItem = (removePd) => {
        let removed = wishlist.filter((item) => item.id !== removePd);
        let plus = wishlist.filter((item) => item.id === removePd);
        setPrice(price - parseInt(plus[0].price)*plus[0].item)
        setNumberItem(numberitem-plus[0].item);
        setWishlist(removed);
    }
    function itemPlus(id) {
        let plus = wishlist.filter((item) => item.id === id);
        if (plus[0].item < 3) {
            plus[0]['item'] = parseInt(plus[0].item) + 1;
            setPrice(price + parseInt(plus[0].price))
            setNumberItem(numberitem+1);
            navigate('/wishlist')
        } else {
            alert('You can add upto maximum 3');
        }
    }
    setWishlist(wishlist);
    function itemMinus(id) {
        let plus = wishlist.filter((item) => item.id === id);
        if (plus[0].item > 1) {
            plus[0]['item'] = parseInt(plus[0].item) - 1;
            setNumberItem(numberitem-1);
            setPrice(price - parseInt(plus[0].price))
            navigate('/wishlist')
        }


    }
    function handleCartClear(){
        setWishlist([]);
    }


    return (
        < >
            <Header />
            {wishlist.length > 0 ? (<div className="checkout">
                <div className="left_page">
                    <div className="itemlist">
                        {wishlist.map((data) => <div className="itemcheckout">
                                <div>
                                    <img height="130px" src={data.image} alt="" />
                                    <div>
                                        <div className='itemquantity'>
                                            <button onClick={() => itemMinus(data.id)}></button>
                                            <strong>Item: {data.item}</strong>
                                            <button onClick={() => itemPlus(data.id)}></button>
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
                </div>

            </div>) : (<div>

                <div className='emptymain'>
                    <div className='empty2'>
                        <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                        <div className='empty3'>Your Wishlist is empty!</div>
                        <div className='empty4'>Add items to it now.</div>
                        <Link to={"/"}>
                            <button className='empty5'>Add now</button>
                        </Link>
                    </div>
                </div>
            </div>)
            }
            <Footer/>
        </>
    );
};

export default WishlistPage;
