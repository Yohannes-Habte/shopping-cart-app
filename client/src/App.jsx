import React, { useReducer, useEffect } from "react";
import axios from "axios";
import cartReducer from "./reducers/cartReducer";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import "./App.scss";

export const ACTIONS = {
  ADD_PRODUCTS: "add-products",
  ADD_TO_CART: "add-cart",
  REMOVE_FROM_CART: "remove-from-cart",
  CHANGE_CART_QUANTITY: "change-cart-quantity"
};

const App = () => {
  // State Variables
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  console.log(state);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");

    dispatch({
      type: ACTIONS.ADD_PRODUCTS,
      payload: data.products,
    });
  };

  useEffect(()=> {
    fetchProducts();
  }, [])

  return (
    <section className="shopping-cart-container">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch}  />
    </section>
  )
  
};

export default App;
