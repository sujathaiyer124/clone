import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    return (
        <div>
           
            <nav className="main-navigation">
                <div id="main-nav" className="primary-navigation">
                   
                    <ul className="ul-menu-item">
                        <li className="menu-item">
                        <a href="https://crowdwisdom.live" className="menu-toggle">
                        <FontAwesomeIcon icon={faHome} /></a>
                        </li>
                        <li className="menu-item"><a href="https://crowdwisdom.live/crypto/">Crypto Forecasts</a></li>
                        <li className="menu-item"><a href="https://crowdwisdom.live/pricing/">Subscriptions</a></li>
                        <li className="menu-item"><a href="https://crowdwisdom.live/calculators/">Crypto Calculators
                            <a className="dd-toggle" href="https://crowdwisdom.live">
                                <i className="fa fa-plus"></i></a>
                            <ul className="sub-menu" >
                                <li className="sub-menu-item"><a href="https://crowdwisdom.live/calculators/crypto-market-cap-comparison-calculator/">Crypto Market Cap Comparison Calculator</a></li>
                                <li className="sub-menu-item "><a href="https://crowdwisdom.live/calculators/crypto-roi-comparison-calculator/">Crypto ROI Comparison Calculator</a></li>
                                <li className="sub-menu-item"><a href="https://crowdwisdom.live/calculators/crypto-price-prediction-calculator/">Crypto Price Prediction Calculator</a></li>
                                 </ul> 
                                 </a>
                        </li>
                        <li className="menu-item "><a href="https://crowdwisdom.live/calculators/latest-crypto-technical-analysis/">Technical Analysis Calculator</a></li>
                        <li className="menu-item "><a href="https://investing.crowdwisdom.live/portfolio-gallery">Best Crypto Portfolios</a></li>
                         <li id="menu-item" class="menu-item "><a href="https://crowdwisdom.live/contact-us/">Contact Us</a></li> 
                         <li id="menu-item" class="menu-item"><a href="https://crowdwisdom.live/sponsored/">PR</a></li> 
                         <li  class="menu-item"><a href="https://crowdwisdom.live" class="cmp-search-icon-btn">
                         <FontAwesomeIcon icon={faSearch} /></a>
                         </li>
                         </ul> 
                         </div>
                
            </nav>
        </div>
    )
}
