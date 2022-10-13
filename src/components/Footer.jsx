import React from "react";
import "../css/Footer.css"

const Footer = () => {
    return ( 
        <div className="main-footer"> 
           <div className="container"> 
             <div className="row"> 
               <div className="col">
                  <h4>Join IKEA Family</h4> 
                  <p>Get exclusive offers, inspiration, and <br></br>
                     lots more to help bring your ideas to <br></br>
                     life. All for free.</p>
                  <button>Join or Log in</button>
                </div>
                  <div className="row">
                <div className="col"> 
                  <h4>Services</h4>
                  <ul className="list-unstyled"> 
                  <li>Circular</li>
                  <li>Planning</li>
                  <li>Interior design</li>
                  <li>Delivery</li>
                  <li>Click & collect</li>
                  <li>Assembly</li>
                  <li>Finance</li>
                  <li>Kitchen services</li>
                  <li>Van hire</li>
                </ul>
                </div>
                  <div className="col"> 
                  <h4>Help</h4>
                  <ul className="list-unstyled"> 
                  <li>Track my order</li>
                  <li>Feedback</li>
                  <li>FAQs</li>
                  <li>Planners</li>
                  <li>Producr recalls</li>
                  <li>Return policy</li>
                  <li>IKEA apps</li>
                </ul>
                </div>
                  <div className="col"> 
                  <h4>About IKEA</h4>
                  <ul className="list-unstyled"> 
                  <li>Store locator</li>
                  <li>Carees at IKEA</li>
                  <li>IKEA group</li>
                  <li>IKEA food</li>
                  <li>IKEA business</li>
                  <li>IKEA Foundation</li>
                  <li>Sustainability</li>
                  <li>Newsroom</li>
                  <li>All Furniture</li>
                </ul>
                </div>
                  <div className="col"> 
                  <h4>IKEA Family</h4>
                  <ul className="list-unstyled"> 
                  <li>Welcome to IKEA Family</li>
                  <li>About</li>
                  <li>Offers</li>
                  <li>Events</li>
                  <li>Community</li>
                </ul>
                </div>
                </div>  
             </div>
             <hr/>
             <div className="row">
                <p className="col-small"> 
                  &copy;{new Date().getFullYear()} Privacy Policy | All right reserved | Cookie Policy | Cookie settings | Terms & Conditions | Responsible Disclosure policy | Accessibility
                </p> 
               </div>
           </div>
        </div>
    )
}

export default Footer
