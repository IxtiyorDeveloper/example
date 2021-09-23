import React from 'react';
import './info.scss'
import Circle from "../circle/circle";
import {BsArrowRight} from "react-icons/bs";

function Info(props) {
    return (
        <div className="info pd">
            <div className="col">
                <div className="t1">
                    Project nest symbolize embody and provide tremendous value
                </div>
                <div className="t2">
                    <Circle text={"Learn More"}/>
                </div>
                <div className="t3">
                    We have a lot of interesting offers for nest Nest One Skyscraper
                </div>
                <div className="t4">
                    View all <BsArrowRight/>
                </div>
            </div>
            <div className="col">
                <div className="t5">
                    Each of our building has its own heritage <br/>
                    <div className="lwr">
                        and <div className="line"/>
                    </div>
                    personality, but they all have one thing in common
                </div>
            </div>
        </div>
    );
}

export default Info;