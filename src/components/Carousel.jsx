import { useContext } from "react";
import { CMSContext } from '../CMSContext';
import "../css/Carousel.css";

function Carousel() {
    const { products } = useContext(CMSContext);
    console.log(products)

    return (
        <section>
            <h2>Products</h2>
            <div className="productCarousel">
                {products.map(p => <div className="productCard" key={p.sys.id}>
                    <h3>{p.fields.productName}</h3>
                    <a href="#"><img src={p.fields.productPicture.fields.file.url} />
                        <p>{p.fields.productDescription}</p>
                    </a>
                </div>)}
            </div>
        </section>
    )
}

export default Carousel

