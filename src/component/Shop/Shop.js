import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]) 
    const hadnelAddevent = (product) =>{
    const newCart = [...cart,hadnelAddevent];
    setCart(newCart);
    }

    const [cart,setCart] = useState([]);
    
    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>proudct:{products.length}</h3>
                {
                    products.map(product=><Product
                    product = {product}
                    key = {product.key}
                    hadnelAddevent = {hadnelAddevent}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Item ordered: {cart.length}</p>
                <p><small>items: </small></p>
            </div>
        </div>
    );
};

export default Shop;