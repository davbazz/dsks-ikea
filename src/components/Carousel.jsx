import React from "react";
import "../css/Carousel.css";

const Carousel = ({ product }) => {
    let productImage;
    if (product.image !== undefined) {
        productImage = product.image
    } else {
        productImage = "Sorry, no picture yet"
    }

    return (
        <>
            <div className="productCard">
                <img src={productImage} />
                <h2><a className="link-yellow" href="#">{product.category}</a></h2>
                <p>{product.title}</p>
            </div>
        </>
    )
}

export default Carousel
