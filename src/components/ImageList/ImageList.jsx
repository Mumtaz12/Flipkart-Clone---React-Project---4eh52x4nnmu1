import FavoriteIcon from '@mui/icons-material/Favorite'; // Import heart icon
import React, { useState } from 'react'
import './imageList.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import { Carousel } from 'antd';
import {Link} from 'react-router-dom'

function ImageList({ category, photo, price, id, rating }) {
  const [wishlist, setWishlist] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const addToWishlist = () => {
    if (!wishlist.some(item => item.id === id)) {
      setWishlist([...wishlist, { id, category, photo, price, rating }]);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>


      {/* <Carousel autoplay> */}
       <FavoriteIcon
            className="wishlist-icon"
            onClick={addToWishlist}
            style={{ color: wishlist.some(item => item.id === id) ? 'red' : 'black' }}
        />
       {/* Wishlist added popup */}
      {showPopup && (
          <div className="wishlist-popup">
            Item added to wishlist!
            <button onClick={closePopup}>Close</button>
          </div>
      )}
      <Link id={id} className="image_details" to={`product/${id}`}>
       
        <img src={photo} alt="" />
        <div className="cardContent">
          <div className="brand-size">
            <strong className="str" style={{backgroundColor: rating>=3? '#388e3c': 'red'}}>{rating}</strong>
            <StarBorderIcon />

          </div>
        <p>{category}</p>
          <div className="price-add">
            <span>${price}</span>
            <span>
            <button>More</button>
          </span>
          </div>
          </div>
      </Link>
     
      {/* </Carousel> */}


    </>
  )
}

export default ImageList
