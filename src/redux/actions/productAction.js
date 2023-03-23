import axios from 'axios';
import * as actionTypes from '../constants/productConstants';

const URL = 'https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products';

// 2nd function is the middleware function
export const getProducts = () => async dispatch => {
  try {
    const { data } = await axios.get(`${URL}`);
    dispatch({ type: actionTypes.Get_Product_Success, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.Get_Product_Fail, payload: error.message });
  }
};

export const getProductDetails = idx => async dispatch => {
  try {
      dispatch({ type: actionTypes.Get_ProductDetails_Request });
      const { data } = await axios.get(`${URL}/${idx}`);
      console.log(data);
    dispatch({ type: actionTypes.Get_ProductDetails_Success, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.Get_ProductDetails_Fail,
      payload: error.message,
    });
  }
};


