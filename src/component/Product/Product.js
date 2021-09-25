import './Product.css'
import React from 'react';

const Product = (props) => {
    const {img,seller,name,price,stock} = props.product;
    console.log(props.product);
    return (
        <div className="product">
            <div className="proudct-image">
                    <img src={img} alt="" srcset="" />
            </div>
            <div className="product-des">
                    <h4>{name}</h4>
                    <p><small>by: {seller}</small></p>
                    <h3>${price}</h3>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button onClick="hadnleEvent" className="add-btn">add to cart</button>
            </div>
        </div>
    );
};

export default Product;