import React from "react";
import "../css/Carousel.css";

const Carousel = ({ product }) => {
    let productImage;
    if (product.path !== undefined) {
        productImage = product.path
    } else {
        productImage = "Sorry, no picture yet"
    }
    // console.log(product.productPicture)

    return (
        <div>
            <div className="productCard">
                <img src={productImage} />
                <h2><a className="link-yellow" href="#">{product.order}</a></h2>
                <p>{product.category}</p>
            </div>
        </div>
    )
}

export default Carousel
