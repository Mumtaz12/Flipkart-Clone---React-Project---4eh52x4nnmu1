import React from "react";
import "./imageList.css";
import HeaderData from "../../HeaderData";
function HeaderImage({ handleCategory }) {
  return (
    <div className="headerImage">
      {HeaderData.map((item) => (
        <div className="imageheader" onClick={()=>handleCategory(item.category)}>
          <img src={item.imageUrl} alt="" />
          <p>{item.category}</p>
        </div>
      ))}
      {/* <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
                <p>Grocery</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                <p>Mobiles</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" />
                <p>Fashion</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                <p>Electronics</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                <p>Home</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                <p>Appliances</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                <p>Travel</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
                <p>Top Offers</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                <p>Beauty,Toys & More</p>
            </div>
            <div className="imageheader">
                <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" />
                <p>Two Wheelers</p>
            </div> */}
    </div>
  );
}

export default HeaderImage;
