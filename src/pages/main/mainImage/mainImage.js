import React from 'react';
import mainNestOne from '../../../asset/img/mainNestOne.jpg'
import './mainImage.scss'
import tgIcon from '../../../asset/img/tg_icon.png'
import hoverArrow from "../../../asset/img/hover_arrow.png";
import Circle from "../circle/circle";


function MainImage(props) {
    const bgImage = {
        backgroundImage: `url(${mainNestOne})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height: "100vh",
    }
    const changeState = () => {

    }
    const returnState = () => {

    }
    return (
        <div className="mainImage" style={bgImage}>
            <div className="content pd">
                <div className="left">
                    <div className="inLeft">
                        <div className="qu">
                            ?
                        </div>
                        <div className="text">
                            We need help
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="irc">
                        <Circle text="play" bg={"white"}/>
                    </div>
                    <div className="button-wrapper"
                         onMouseEnter={() => changeState()}
                         onMouseLeave={() => returnState()}
                    >
                        <div className="button">
                            <div className="in-button">
                                <div className="wr">
                                    <img
                                        className="img"
                                        src={tgIcon}
                                        alt=""
                                    />
                                    Send Request
                                </div>
                                <img
                                    className="arrowMain"
                                    src={hoverArrow}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainImage;