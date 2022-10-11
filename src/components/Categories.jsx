import React, { useContext } from 'react';
import {CMSContext} from '../CMSContext';
import "../css/Cards.css"

function Categories() {
    const getCategories  = useContext(CMSContext);
    console.log(getCategories)
    return (
        <section className="cards">
            <h2 className="cards_header">
                More ideas and inspiration from your great value furniture store
            </h2>
            <CardsCategory/>
        </section>
    )
}

export default Categories

function CardsCategory() {
    return (
        <ul className="cards_category">
            <li className="cards_category_link">All</li>
            <li className="cards_category_link">Bedroom</li>
            <li className="cards_category_link">Living Room</li>
            <li className="cards_category_link">Kitchen </li>
            <li className="cards_category_link">Workspace</li>
            <li className="cards_category_link">Outdoor</li>
            <li className="cards_category_link">Bathroom</li>
            <li className="cards_category_link">Baby & Children</li>
            <li className="cards_category_link">Dining</li>
            <li className="cards_category_link">Halway</li>
            <li className="cards_category_link">Laundry</li>
            <li className="cards_category_link">Bundles</li>
        </ul>
    )
}