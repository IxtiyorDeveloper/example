import React from 'react';
import './live.scss'
import img from "../../../asset/img/ACI-001.jpg"
import img360 from '../../../asset/img/360_Icon.png'

function Live(props) {
    return (
        <div className="live pd">
            <div className="in-live" style={{backgroundImage:`url(${img})`}}>
                <div className="img360">
                    <img src={img360} alt=""/>
                </div>
                <div className="red">
                    <div className="dot"/>
                    Live
                </div>
                <div className="pLeft">
                    <div className="bCircle">
                        360 TOUR
                    </div>
                    <div className="bText">
                        Watch your future home in 360 view
                    </div>
                </div>
                <div className="pRight">
                    <div className="bText">
                      Watch Construction in Live video
                    </div>
                    <div className="rCircle">
                        Live camera
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Live;