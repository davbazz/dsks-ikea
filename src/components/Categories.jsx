
// showcase of products filtered by category

import React, { useContext } from 'react';
import { useState } from 'react';
import { CMSContext } from '../CMSContext';
import "../css/Categories.css"

function Categories() {
    const {categories} = useContext(CMSContext);
    const [activeCategory, setActiveCategory] = useState('All')
    
    // function retArrOfStuff() {
    //     return [54311234234, "hello", function(){console.log(new Date())}]
    // }
    // const allThatStuff = retArrOfStuff()
    // const [qowdijqwoidjqwdoj, str, func] = retArrOfStuff()
    // console.log(qowdijqwoidjqwdoj, str, func)
    // you can A) store "state" (information) in the URL 
    // you can B) store "state" (information) in a variable
    // different kinds of state can be local, if they're not that serious
    // like a dropdown or a presentational state ( like a carousel image index position)

    // console.log(categories.map(cat => cat.fields.category))
    return (
        <section className="categories">
            <h2 className="cards_header">
                More ideas and inspiration from your great value furniture store
            </h2>
            
            <div className='cards_categories'>
                {[  
                    "All",
                    "Bedroom",
                    "Living Room",
                    "Kitchen",
                    "Workspace",
                    "Outdoor",
                    "Bathroom",
                    "Baby & Children",
                    "Dining",
                    "Halway",
                ].map(cat => <div key={cat} onClick={()=>setActiveCategory(cat)} className="cards_category_link">{cat}</div>)}
            </div>
            
            <div className="categoryCards">
                {categories
                .filter(cat => cat.fields.category === activeCategory)
                .map(cat => {
                    console.log(cat)
                    return  <div className="categoryCard" key={cat.sys.id}>   
                                <a href="#"><img src={cat.fields.path} /></a>
                            </div>
                })}
            </div>
        </section>
    )
}

export default Categories