import React from "react";
import "../css/Header.css"

const Header = ({ products }) => {
    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        <img className="logo" src="src/img/logo.png" alt="the website logo" />
                    </div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className="nav-links">
                    <a className='dropdown'>
                        <span>Products</span>
                        <div className="dropdown-content">
                            <ul id="category-menu">
                                {products.map((product, index) => <li key={index}>{product.category}</li> )}
                            </ul>
                        </div>
                    </a>
                    <a>Offers</a>
                    <a>Best Seller</a>
                    <a href="#"><input id='search' type="text" placeholder="Search" /></a>
                    <a href="#"><input className='login' type="button" value='LogIn' /></a>
                    <a href="#"><input className='signup' type="button" value='SignUp' /></a>
                    <a href="#"><img className="shopping-cart" src="src/img/Shopping-Cart-icon.png" alt="" /></a>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Header