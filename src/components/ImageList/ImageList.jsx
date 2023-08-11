import React, { useState } from 'react'
import './imageList.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import { Carousel } from 'antd';
import {Link} from 'react-router-dom'

function ImageList({ category, photo, price, id, rating }) {

  return (
    <>
     
    
      {/* <Carousel autoplay> */}
      <Link id={id} className="image_details" to={`product/${id}`}> 
        <img src={photo} alt="" />
        <div className="cardContent">
        {/*<p className="price">Price: {price}</p>*/}
        {/*<div><span className='ratings' style={{backgroundColor: rating>=3? '#388e3c': 'red' }}>{rating}<StarBorderIcon /></span></div>*/}
          <div className="brand-size">
            <strong className="str" style={{backgroundColor: rating>=3? '#388e3c': 'red'}}>{rating}</strong>
            <StarBorderIcon />

          </div>
        <p>{category}</p>
        {/*<p className="add" style={{color:'green'}}>More Details...</p>*/}
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