import React from 'react';
import './location.scss'
import LocationImg from '../../../asset/img/location_Map.jpg'

function Location(props) {
    return (
        <div className="location pd">
            <div className="textWr">
                <div className="title">
                    Location
                </div>
                <div className="text">
                    life in "nest one" is not just special status.but also an opportunity
                    to enjoy all the advantages of the center of tashkent city
                </div>
            </div>
            <div className="box">
                <div className="col">
                    All places
                </div>
                <div className="col">
                    Transports
                </div>
                <div className="col">
                    Banks
                </div>
                <div className="col">
                    SuperMarkets
                </div>
                <div className="col">
                    Pharmacies
                </div>
                <div className="col">
                    Education
                </div>
                <div className="col">
                    Restaurants
                </div>
            </div>
            <div className="imgwr">
                <img src={LocationImg} alt="" className="img"/>
            </div>
        </div>
    );
}

export default Location;