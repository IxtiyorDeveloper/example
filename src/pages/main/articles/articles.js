import React from 'react';
import './articles.scss'
import {BsArrowRight} from "react-icons/bs";
import data from "./data";

function Articles(props) {
    return (
        <div className="articles pd">
            <div className="art-wr">
                <div className="titleA">
                    Articles by Nest
                </div>
                <div className="art">
                    All Articles <BsArrowRight/>
                </div>
            </div>
            <div className="grid">
                {
                    data.map((i,k) => {
                    return(
                        <div className="col" key={k}>
                            <img src={i.img} alt="" className="img"/>
                            <div className="title">
                                {i.title}
                            </div>
                            <div className="text">
                                {i.text}
                            </div>
                            <div className="abs">
                                Read more <BsArrowRight/>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    );
}

export default Articles;