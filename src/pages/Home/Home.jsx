import React, {useEffect, useState} from "react";
import './Home.css'
import CategoryBar from "../../components/1CategoryBar/CategoryBar";
import ProductCarousel from "../../components/3ProductCarousel/ProductCarousel";
import {BestOf, CategoryBarData} from "../../components/app/Datas";
import "./Home.css";
import axios from "axios";


const Home = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
            .then(response => response);

    }, []);

    return (
        <div className="Home">
            <div className="Home-CategoryContainer">
                <div className="Home-CategoryBar" style={{display: "flex"}}>
                    {/*{CategoryBarData.map(product => <Product key={product.id} product={product.title} />)}*/}
                    {CategoryBarData.map((item, index) => (
                        <CategoryBar
                            key={index}
                            Imgsrc={item.imageSrc}
                            CategoryName={item.category}
                        />
                    ))}
                </div>
            </div>
            <div className="Home-Container">
                {/* <div className="Home-Carousel">
                    <BannerCarousel data={CarouselData}/>
                </div> */}
                <div className="Home-ProductCarousel">
                    <ProductCarousel
                        BgImg={
                            "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                        }
                        Title={"Best of Electronics"}
                        Data={BestOf.Electronics}

                    />
                    <ProductCarousel
                        BgImg={
                            "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                        }
                        Title={"Beauty,Food,Toys"}
                        Data={BestOf.BeautyFoodsToys}
                    />
                    <ProductCarousel
                        BgImg={
                            "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                        }
                        Title={"Beauty,Food,Toys"}
                        Data={BestOf.Electronics}
                    />
                    <ProductCarousel
                        BgImg={
                            "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                        }
                        Title={"Winter Essentials"}
                        Data={BestOf.WinterEssential}
                    />
                    <ProductCarousel
                        BgImg={
                            "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                        }
                        Title={"Wedding & Gifting Specials"}
                        Data={BestOf.WeddingsAndGifts}

                    />
                </div>
                {/* <products/> */}
                {/*{products.map(product => <Product key={product.id} product={product} />)}*/}
                {/*    <div>*/}
                {/*        Product cards*/}
                {/*        <Product/>*/}
                {/*        <div>*/}
                {/*            <img src="product1.png" alt="Product 1" />*/}
                {/*            <div>*/}
                {/*                <h3>Product 1</h3>*/}
                {/*                <p>Description of Product 1</p>*/}
                {/*                <h4>Price: $10.00</h4>*/}
                {/*                <button>Add to Cart</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <img src="product2.png" alt="Product 2" />*/}
                {/*            <div>*/}
                {/*                <h3>Product 2</h3>*/}
                {/*                <p>Description of Product 2</p>*/}
                {/*                <h4>Price: $20.00</h4>*/}
                {/*                <button>Add to Cart</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        ...*/}
                {/*        Repeat for all products in the list*/}

                {/*    </div>*/}
                {/*    Pagination*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h2>Products</h2>*/}

            </div>
        </div>
    );
};

export default Home;
