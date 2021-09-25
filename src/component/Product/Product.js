import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'


const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {img,seller,name,price,stock} = props.product;
    console.log(props);
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
                    <button onClick={() => props.hadnelAddevent(props.product)} className="add-btn">{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;