import React from 'react';
import './card.scss'
import {appartamentsData} from "./data";
import {BsArrowRight} from 'react-icons/bs'

function Card(props) {
    return (
        <div className="card pd">
            <div className="w50">
                <div className="title">
                    Project Nest
                </div>
                <div className="text">
                    <div className="one">Projects Included in the Nest</div>
                    <div className="two">
                        Don't miss the chance to buy your
                        apartment for a favourite price during construction
                        phase in the highest building in central Asia
                    </div>
                </div>
            </div>
            <div className="wrapper">
                {
                    appartamentsData.map((i, k) => {
                        if (i.id === 1) {
                            return (
                                <div className="col" key={k}>
                                    <div className="img-wr">
                                        <img src={i.img} alt="" className="img"/>
                                    </div>
                                    <div className="inner">
                                        <div className="title">
                                            {i.title}
                                        </div>
                                        <div className="text">
                                            {i.description}
                                        </div>
                                        <div className="link">
                                            View project <BsArrowRight className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {
                    appartamentsData.map((i, k) => {
                        if (i.id === 2) {
                            return (
                                <div className="col" key={k}>
                                    <div className="img-wr">
                                        <img src={i.img} alt="" className="img"/>
                                    </div>
                                    <div className="inner">
                                        <div className="title">
                                            {i.title}
                                        </div>
                                        <div className="text">
                                            {i.description}
                                        </div>
                                        <div className="link">
                                            View project <BsArrowRight className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="wrapper">
                {
                    appartamentsData.map((i, k) => {
                        if (i.id === 3) {
                            return (
                                <div className="col" key={k}>
                                    <div className="img-wr">
                                        <img src={i.img} alt="" className="img"/>
                                    </div>
                                    <div className="inner">
                                        <div className="title">
                                            {i.title}
                                        </div>
                                        <div className="text">
                                            {i.description}
                                        </div>
                                        <div className="link">
                                            View project <BsArrowRight className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {
                    appartamentsData.map((i, k) => {
                        if (i.id === 4) {
                            return (
                                <div className="col" key={k}>
                                    <div className="img-wr">
                                        <img src={i.img} alt="" className="img"/>
                                    </div>
                                    <div className="inner">
                                        <div className="title">
                                            {i.title}
                                        </div>
                                        <div className="text">
                                            {i.description}
                                        </div>
                                        <div className="link">
                                            View project <BsArrowRight className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="wrapper">
                {
                    appartamentsData.map((i, k) => {
                        if (i.id === 5) {
                            return (
                                <div className="col" key={k}>
                                    <div className="img-wr">
                                        <img src={i.img} alt="" className="img"/>
                                    </div>
                                    <div className="inner">
                                        <div className="title">
                                            {i.title}
                                        </div>
                                        <div className="text">
                                            {i.description}
                                        </div>
                                        <div className="link">
                                            View project <BsArrowRight className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {
                    appartamentsData.map((i, k) => {
                        if (i.id === 6) {
                            return (
                                <div className="col" key={k}>
                                    <div className="img-wr">
                                        <img src={i.img} alt="" className="img"/>
                                    </div>
                                    <div className="inner">
                                        <div className="title">
                                            {i.title}
                                        </div>
                                        <div className="text">
                                            {i.description}
                                        </div>
                                        <div className="link">
                                            View project <BsArrowRight className="icon"/>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Card;