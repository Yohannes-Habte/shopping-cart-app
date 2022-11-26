import React from "react";
import { ACTIONS } from "../../App";
import "./Products.scss";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <section className="products-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <div className="title-price">
              <span> {product.title} </span>
              <span> ${product.price} </span>
            </div>
            <div className="product-btn-container">
              {cart.some((selectedProduct) => selectedProduct.id === product.id) ? 
              (<button className="product-btn-delete"
                onClick={() => dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: {
                        id: product.id
                    }
                }) }
              >Remove from Cart</button>
              ) : (<button className="product-btn-add"
                    onClick={() => {
                        dispatch({
                            type: ACTIONS.ADD_TO_CART,
                            payload: {
                                id: product.id,
                                title: product.title,
                                thumbnail: product.thumbnail,
                                quantity: 1,
                                price: product.price
                            }
                        })
              }} >Add to Cart </button>)}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
