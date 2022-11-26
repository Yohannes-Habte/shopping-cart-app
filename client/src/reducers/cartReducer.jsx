import { ACTIONS } from "../App";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.ADD_TO_CART:
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (selectedPro) => selectedPro.id !== action.payload.id
        ),
      };
    case ACTIONS.CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((cartPro) =>
          cartPro.id === action.payload.id
            ? (cartPro.quantity = action.payload.quantity)
            : cartPro.quantity
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
