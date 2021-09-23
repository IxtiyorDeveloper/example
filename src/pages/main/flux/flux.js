import React, {useState} from 'react';
import './flux.scss'
import TitleAndText from "../titleAndText/titleAndText";
import Circle from "../circle/circle";
import img1 from '../../../asset/img/flux_1.jpg'
import img2 from '../../../asset/img/flux_2.jpg'
import img3 from '../../../asset/img/flux_3.jpg'
import {BsArrowRight} from 'react-icons/bs'
import {BsArrowLeft} from 'react-icons/bs'

function Flux(props) {
    const [img, setImg] = useState(img1);
    const handleBack = () => {
        if (img === img1) {
            setImg(img3)
        }
        if (img === img2) {
            setImg(img1)
        }
        if (img === img3) {
            setImg(img2)
        }
    }
    const handleNext = () => {
        if (img === img1) {
            setImg(img2)
        }
        if (img === img2) {
            setImg(img3)
        }
        if (img === img3) {
            setImg(img1)
        }
    }
    return (
        <div className="flux pd">
            <TitleAndText title={"Home in Style Flux"} text={"Enjoy the Beauty of the Rooms"}/>
            <div className="wr">
                <div className="first">
                    <Circle text={"Learn More"}/>
                </div>
                <div className="img">
                    <div style={{backgroundImage: `url(${img})`}} className="img1"/>
                    <div className="dots">
                        <div className={`dot ${img === img1 ? "p" : ""} `} onClick={() => setImg(img1)}/>
                        <div className={`dot ${img === img2 ? "p" : ""} `} onClick={() => setImg(img2)}/>
                        <div className={`dot ${img === img3 ? "p" : ""} `} onClick={() => setImg(img3)}/>
                    </div>
                </div>
                <div className="arrow1">
                    <div className="left" onClick={() => handleBack()}>
                        <BsArrowLeft className="icon"/>
                    </div>
                    <div className="right">
                        <BsArrowRight className="icon" onClick={() => handleNext()}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flux;