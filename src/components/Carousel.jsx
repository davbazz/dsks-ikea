import React from "react";
import "../css/Carousel.css";

const Carousel = ({ product }) => {
    let productImage;
    if (product.image !== undefined) {
        productImage = product.image.fields.file.url
    } else {
        productImage = "Sorry, no picture yet"
    }
    // console.log(product.productPicture)

    return (
        <div>
            <div className="productCard">
                <img src={productImage} />
                <h2><a className="link-yellow" href="#">{product.title}</a></h2>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default Carousel
