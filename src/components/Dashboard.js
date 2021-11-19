import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MapContainer from './MapContainer';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard_main">
            <h2 className="dashboard_park">Park Space</h2>
            </div>
            <div>
                <input type="text" name="my_location_space" className="my_location_space" placeholder="find parking space at" />
                <input type="text" name="my_location" className="my_location" placeholder="use my location" />
                <Link to="/available"><button name="submit" className="dashboard_search"><FontAwesomeIcon icon={faSearch} /></button></Link>
            </div>
            <div id="map">
                <MapContainer />
            </div>
        </>
    )
}

export default Dashboard;