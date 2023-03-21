import React from "react";
import "./CategoryBanner.css";

const CategoryBanner = ({ImgSrc, Title, Brand}) => {
    return (
        <span className="CategoryBanner">
            <img src={ImgSrc} alt="" className="CategoryBanner-img"/>
            <p className="CategoryBanner-title">
                {Title.length < 15 ? Title : Title.slice(0, 5) + "..."}
            </p>
            <p className="CategoryBanner-ShopNow">Shop Now!</p>
            <p className="CategoryBanner-Brands">{Brand}</p>
        </span>
    );
};

export default CategoryBanner;
