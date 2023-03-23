import axios from 'axios';
import * as actionType from '../constants/actionConstants';

const URL = 'https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89';

export const addCart = (id, quantity) => async dispatch => {
  try {
    const { data } = await axios.get(`${URL}/products/${id}`);
    dispatch({
      type: actionType.ADD_TO_CART,
      payload: { ...data, quantity },
    });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeCart = (id) => (dispatch) => {
    dispatch({type: actionType.REMOVE_FROM_CART, payload: id});
};
