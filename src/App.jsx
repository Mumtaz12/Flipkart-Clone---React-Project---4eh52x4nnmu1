// import './App.css';
import Header from './components/Header/Header';
import HeaderImage from './components/ImageList/HeaderImage';
import Mydata from './components/Mydata/Mydata';
// import Checkout from './components/Checkout/Checkout';
// import BuyProduct from './components/BuyProduct/BuyProduct';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import Wishlist from './components/Header/WishlistPage'



function App() {
  const [value, setValue] = useState('');
  const [cate,setCate] = useState('');
  const [wishlistItems, setWishlistItems] = useState([]);

  function addToWishlist(item) {
        if (!wishlistItems.includes(item)) {
            setWishlistItems([...wishlistItems, item]);
        }
    }

    const searchValue = (e) =>{
  // console.log(e.target.value)
  setCate('');
  setValue(e.target.value);
}
function handleCategory(cat){
console.log(cat);
setCate(cat)
}
function handleHome(){
  setCate('');
}

  return (
         <div >
      <Header searchValue={searchValue} handleHome={handleHome} />
     {!value && <HeaderImage  handleCategory={handleCategory}/>   }
     <Mydata value={value} cate={cate} addToWishlist={addToWishlist} />
        <Wishlist wishlistItems={wishlistItems} /> {/* Render the Wishlist component */}
     <Footer/>

    </div>
  );
}

export default App;
