import React, { Fragment, useEffect } from 'react';

// mui imports
import styled from '@emotion/styled';
import { Box } from '@mui/system';

// components imports
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import Midslide from './Midslide';


// redux imports
import { getProducts } from '../../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux'
import Midsection from './Midsection';

//custom mui style
const Component = styled(Box)({
    padding: '10px',
    backgroundColor: '#F2F2F2'
})

function Home() {

  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])

    const plainClothesWomen = products ? products.filter(product => product.category === "women's clothing") : [];
    const mensClothing = products ? products.filter(product => product.category === "men's clothing") : [];
    const jewelleryProducts = products ? products.filter(product => product.category === "jewelery") : [];
    const electronicsProducts = products ? products.filter(product => product.category === "electronics") : [];


  return (
    <Fragment>
      <Navbar />
      <Component>
        <Banner />
        <Midslide products={products} title={'Deal of the day'} timer={true}/>
        <Midsection />
        <Slide products={plainClothesWomen} title={"women's clothing"} timer={false}/>
        <Slide products={products} title={'Recomended Items'} timer={false}/>
          <Slide products={mensClothing} title={"Men's Clothing"} timer={false}/>
        <Slide products={products} title={'Trending Offers'}  timer={false}/>
          <Slide products={jewelleryProducts} title={"Jewellery"} timer={false}/>
        <Slide products={products} title={'Season"s top picks'} timer={false}/>
        <Slide products={electronicsProducts} title={"Electronics"} timer={false}/>
      </Component>
    </Fragment>
  );
}

export default Home;
