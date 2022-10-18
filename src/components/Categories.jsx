import React, { useContext } from 'react';
import { CMSContext } from '../CMSContext';
import "../css/Cards.css"

function Categories() {
    const getCategories = useContext(CMSContext);
    console.log(getCategories)
    return (
        <section className="cards">
            <h2 className="cards_header">
                More ideas and inspiration from your great value furniture store
            </h2>
            <CardsCategory />
            <CardsSection />
        </section>
    )
}

export default Categories

function CardsCategory() {
    return (
        <div className='cards_categories'>
            <div className="cards_category_link">All</div>
            <div className="cards_category_link">Bedroom</div>
            <div className="cards_category_link">Living Room</div>
            <div className="cards_category_link">Kitchen </div>
            <div className="cards_category_link">Workspace</div>
            <div className="cards_category_link">Outdoor</div>
            <div className="cards_category_link">Bathroom</div>
            <div className="cards_category_link">Baby & Children</div>
            <div className="cards_category_link">Dining</div>
            <div className="cards_category_link">Halway</div>
            <div className="cards_category_link">Laundry</div>
            <div className="cards_category_link">Bundles</div>
        </div>
    )
}

function CardsSection() {
    const { cards } = useContext(CMSContext);
    
    return (
        <div className="categoryCards">
            {cards.map(c => <div className="categoryCard" key={c.sys.id}>   
                <a href="#"><img src={c.fields.path} /></a>
            </div>)}
        </div>
    )
}
