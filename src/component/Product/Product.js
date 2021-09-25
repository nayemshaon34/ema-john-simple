import './Product.css'
import React from 'react';

const Product = (props) => {
    console.log(props.product);
    return (
        <div className="product">
            <div className="proudct-image">
                    <img src={props.product.img} alt="" srcset="" />
            </div>
            <div className="product-des">
                    <h2>{props.product.name}</h2>
            </div>
        </div>
    );
};

export default Product;