import { useContext } from "react";
import { CMSContext } from '../CMSContext';
import "../css/Carousel.css";

function Carousel() {
    const { cards, getCategories } = useContext(CMSContext);
    console.log(getCategories)


    return (
        <section className="cards">
            <h2 className="cards_header">Products</h2>
            <div>
                {cards.map(c => <li key={c.sys.id}>
                    {c.fields.category}
                    <img src={c.fields.path} />
                </li>)}
            </div>
        </section>
    )
}

export default Carousel
