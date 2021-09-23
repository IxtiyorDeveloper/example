import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss'
import img1 from '../../../asset/img/gallery_1.jpg'
import img2 from '../../../asset/img/flux_1.jpg'
import img3 from '../../../asset/img/flux_2.jpg'
import {BsArrowLeft, BsArrowRight} from "react-icons/bs";


function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <BsArrowRight/> : <BsArrowLeft/>;
    return (
        <span className={className} onClick={props.onClick}>
      {char}
    </span>
    );
}

function Carousel(props) {
    var settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    const data = [
        {
            id:1,
            img:img1,
        },
        {
            id:2,
            img:img2,
        },
        {
            id:3,
            img:img3,
        },
        {
            id:1,
            img:img1,
        },
        {
            id:2,
            img:img2,
        },
        {
            id:3,
            img:img3,
        },
    ]
    return (
        <div className="carousel">
            <Slider {...settings}  nextArrow={<Arrow type="next"/>}
                    prevArrow={<Arrow type="prev"/>}
            className="slider"
            >
                {
                    data.map((i,k) => {
                        return(
                            <div key={k} className="slider">
                                <img src={i.img} alt="" className="width30"/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default Carousel;