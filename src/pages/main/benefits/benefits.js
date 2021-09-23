import React from 'react';
import './benefits.scss'
import TitleAndText from "../titleAndText/titleAndText";
import img1 from "../../../asset/img/invest_1.png"
import img2 from "../../../asset/img/invest_2.png"
import img3 from "../../../asset/img/invest_3.png"
import img4 from "../../../asset/img/invest_4.png"
import {BsArrowUpRight} from "react-icons/bs";

function Benefits(props) {
    return (
        <div className="benefits pd">
            <TitleAndText title={"Benefits of Investing in Nest One"}
                          text={"Commercial real estate always was the best choice for money investment"}/>
            <div className="ds">
                <div className="col">
                    <div className="center-colB">
                        <div className="circleB">
                            Show feel
                        </div>
                        <div className="titleB">
                            if you are interested, you can visit our Showroom
                        </div>
                        <div className="arw">
                            <BsArrowUpRight className="ar"/>
                        </div>
                    </div>
                </div>
                <div className="col">
                      <div className="grid">
                          <div className="box">
                              <img src={img1} alt="" className="img"/>
                              <div className="text">
                                  Business Center of the capital
                              </div>
                              <div className="fText">
                           Our complex is located in Tashkent City Area where from
                                  each side you are surrounded by successful people
                              </div>
                          </div>
                          <div className="box">
                              <img src={img2} alt="" className="img"/>
                              <div className="text">
                                  Modern <br/> Design
                              </div>
                              <div className="fText">
                              Our complex is located in Tashkent City Area where from
                              each side you are surrounded by successful people
                          </div>
                          </div>
                          <div className="box">
                              <img src={img3} alt="" className="img"/>
                              <div className="text">
                                  Maximum <br/> Comfort
                              </div>
                              <div className="fText">
                                  Our complex is located in Tashkent City Area where from
                                  each side you are surrounded by successful people
                              </div>
                          </div>
                          <div className="box">
                              <img src={img2} alt="" className="img"/>
                              <div className="text">
                                 Modern design
                              </div>
                              <div className="fText">
                                  Our complex is located in Tashkent City Area where from
                                  each side you are surrounded by successful people
                              </div>
                          </div>
                          <div className="box">
                              <img src={img4} alt="" className="img"/>
                              <div className="text">
                                  Well-Developed  <br/> Infrastructure
                              </div>
                              <div className="fText">
                                  Our complex is located in Tashkent City Area where from
                                  each side you are surrounded by successful people
                              </div>
                          </div>
                          <div className="box">
                              <img src={img1} alt="" className="img"/>
                              <div className="text">
                                  Business center of the capital
                              </div>
                              <div className="fText">
                                  Our complex is located in Tashkent City Area where from
                                  each side you are surrounded by successful people
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;