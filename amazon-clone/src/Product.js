import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [state,dispatch]=useStateValue();
  console.log(state)
  const addToBasket=()=>{
    //dispacth some action in data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }




  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star">🌟</span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
