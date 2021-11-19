import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MapContainer from "./MapContainer";
import {Link} from 'react-router-dom';

const AvailableParkingSpaces = () => {
    return (
        <>
            <div className="dashboard_main">
                <h2 className="dashboard_park">Park Space</h2>
            </div>
            <div>
                <input type="text" name="my_location" className="my_location_" placeholder="use my location" />
                <button name="submit" className="dashboard_search"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div>
                <div><span className="telliskivi">Telliskivi</span> </div>
                <span className="km">|1.2km</span> 
                <span className="directions">Directions</span><br />
                <span className="available">Available parking spaces: 4</span>
                <span className="per_hour">€ 0.40/ Hour</span>
            </div>
            <div className="hr"></div>
            <div>
                <span className="telliskivi_1">Telliskivi</span> 
                <span className="km_1">|1.2km</span> 
                <span className="directions_1">Directions</span><br />
                <span className="available_1">Available parking spaces: 4</span>
                <span className="per_hour_1">€ 0.40/ Hour</span>
            </div>
            <div className="hr"></div>
        
            <div>
                <span className="book">Book park space</span>
                <div>
                <span className="start_time">Start Time :</span> <span className="time">10:00</span>
                <span className="duration">Duration :</span> <span className="duration_hour">02 hours</span>
                <span className="amount">Amount:</span> <span className="currency">€0.80</span>
                <Link to="/payment_gateway" ><button className="submit" value="Pay" >Pay</button></Link>
                </div>   
            </div>
            <div id="map_1">
                <MapContainer />
            </div>
        </>
    )
}

export default AvailableParkingSpaces;