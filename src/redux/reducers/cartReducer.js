import * as actionType from '../constants/actionConstants';

export const cartReducer = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      // here payload is product details and no.of quantity
      const item = action.payload;
      // if products in the cartItems matches with item from payload.
      // will store that product to exit variable
      const exit = state.cartItems.find(product => product.id === item.id);

      if (exit) {
        return {
          // if product in the cartItems is equal to exist product.
          // then will replace it with new item else old data itself.
          ...state,
          cartItems: state.cartItems.map(data =>
            data.product === exit.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          product => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
