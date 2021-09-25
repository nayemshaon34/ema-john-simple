import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            <div>
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="">Shop</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;<p>this is from header</p>