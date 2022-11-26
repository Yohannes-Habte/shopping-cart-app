import React, { useState, useEffect } from "react";
import { ACTIONS } from "../../App";
import "./Cart.scss";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  // Function that handle change quantity
  const changeQuantity = (id, quantity) => {
    dispatch({
        type: ACTIONS.CHANGE_CART_QUANTITY,
        payload: {
            id,
            quantity
        }
    })
  };

  // Total Price
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) =>{
        return (
            acc + Number(curr.price * curr.quantity)
        )
    }, 0))
  }, [cart])

  return (
    <section className="cart-container">
      <h2 className="cart-heading"> Cart </h2>

      {cart.length > 0 ? (
        <div className="cart-order-container">
          {cart.map((product) => {
            return (
              <div className="cart-ordered-product-container">
                <div>
                  <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className="cart-title-price">
                  <span> {product.title} </span>
                  <span className="price"> ${product.price} </span>
                </div>
                <div className="add-remove-btn">
                    <button onClick={() => changeQuantity(product.id, product.quantity - 1)}>-</button>
                    <span> {product.quantity} </span>
                    <button onClick={() => changeQuantity(product.id, product.quantity + 1)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <span>Cart is empty</span>
      )}

      <hr />
      <div className="total-cost">
      <h2> Total Cost</h2>
      <h1 className="total"> {total} </h1>
      </div>
      <hr />
    </section>
  );
};

export default Cart;
