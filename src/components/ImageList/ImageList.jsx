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
        <p >Price: {price}</p>
        <div><span className='ratings' style={{backgroundColor: rating>=3? '#388e3c': 'red' }}>{rating}<StarBorderIcon /></span></div>
        <p >{category}</p>
        <p style={{color:'green'}}>More Details...</p>
      </Link>
      {/* </Carousel> */}
      
    
    </>
  )
}

export default ImageList