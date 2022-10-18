import React, { useState } from "react";
import { useContext } from "react";
import { CMSContext } from '../CMSContext';
import { Login } from "./Login";
import "../css/Header.css"

function Header() {
    const { products } = useContext(CMSContext);
    const [currentForm, setCurrentForm] = useState('login');
    const [show, toggleShow] = useState(false);

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <section>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        <img className="logo" src="public/dsks-logo.svg" alt="the website logo" />
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
                            {products.map(p => <div className="productCard" key={p.sys.id}>
                                <h3>{p.fields.productName}</h3>

                            </div>)}
                        </div>
                    </a>
                    <a>Offers</a>
                    <a>Best Seller</a>
                    <a href="#"><input id='search' type="text" placeholder="Search" /></a>
                    <a onClick={() => toggleShow(!show)} className='btn'>Login</a>
                    {show && <div id="myModal" class="modal">
                        <div class="modal-content">
                            <span class="close">&times;</span>
                            <p>{
                                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
                            }</p>
                        </div>
                    </div>}
                    <a href="#" className='btn'>Sign Up</a>
                    <a href="#"><img className="shopping-cart" src="src/img/shopping-cart_white.svg" alt="" /></a>
                </div>
            </div>
        </section>

    )
}

export default Header