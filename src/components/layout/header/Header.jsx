import React from 'react';
import {Link} from "react-router-dom";
import putImage from '../../../utils/putImage';
import './Header.scss'
import nestOne from '../../../asset/img/nestoneLogo.png'
import ukLogo from '../../../asset/img/Uk_logo.png'


function Header(props) {
    return (
        <div className="header pd">
            <div className="col">
                <Link>
                    <div>
                        <img src={nestOne} alt=""/>
                    </div>
                </Link>
            </div>
            <div className="col">
                <Link>
                    <div className="link">
                        360 TOUR
                    </div>
                </Link>
                <Link>
                    <div className="link" style={{color: "#DD0D0D"}}>
                        <div className="dot"/>
                        LIVE CAMERA
                    </div>
                </Link>
            </div>
            <div className="col">
                <Link>
                    <div className="link">
                        ABOUT US
                    </div>
                </Link>
                <Link>
                    <div className="link">
                        PROJECTS
                    </div>
                </Link>
                <Link>
                    <div className="link">
                        CONSTRUCTION
                    </div>
                </Link>
                <Link>
                    <div className="link">
                        LOCATION
                    </div>
                </Link>
                <Link>
                    <div className="link">
                        ARTICLES
                    </div>
                </Link>
                <div className="link">
                    ENG <img src={ukLogo} alt=""/>
                </div>
                <Link>
                    <div className="link">
                        CONTACTS
                    </div>
                </Link>
            </div>
            <div className="w990wr">
                <div className="w990">
                     Send request
                </div>
                <div className="w990">
                    menu
                </div>
            </div>
        </div>
    );
}

export default Header;