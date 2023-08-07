import React, { useEffect, useState } from "react";
import ImageList from "../ImageList/ImageList";
import "./mydata.css";
import Offerdata from "../ImageList/Offerdata";
import productData from "../../productData";

const url =
  "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

const Mydata = ({ value, cate }) => {
  const [data, setData] = useState([]);
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let myData = [...data, ...productData];
      setData(myData);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchUsers(url);
  }, []);
// console.log(data);
  let menData = data.filter((deta) =>
    (deta.title.toLowerCase().includes(value.toLowerCase())) 
    );
    let searchedData = data.filter((deta)=>
    (deta.category == (cate=='Fashion'? ("men's clothing" && "women's clothing"):cate))
  )
console.log(cate);
console.log(searchedData);
  return (
    <>
      {!value && !cate && <Offerdata />}
      {cate==='Travel'?(<div>
        <h1>
        Coming Soon!
        </h1>
        </div>):(
          <>
          {(menData.length || searchedData.length) > 0 ? (
            <div className="imagedata">
              {(searchedData.length>0? searchedData: menData).map((data) => (
                <ImageList
                  id={data.id}
                  category={data.title}
                  price={data.price}
                  photo={data.image}
                  rating={data.rating.rate}
                />
              ))}
            </div>
          ) : (
            <div>
              <h1>No such Item Found!</h1>
            </div>
          )}
          </>

        )}
     
    </>
  );
};

export default Mydata;
