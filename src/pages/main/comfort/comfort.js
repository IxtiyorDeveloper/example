import React from 'react';
import './comfort.scss'
import TitleAndText from "../titleAndText/titleAndText";
import {BsArrowUpRight} from 'react-icons/bs'

function Comfort(props) {
    return (
        <div className="comfort pd">
            <TitleAndText title={"High level of Comfort"}
                          text={"the level of comfort often determines the standard of living"}
            />
            <div>
                <div className="cd">
                    <div className="col">
                        <div className="title">
                            01 reception
                        </div>
                        <div className="text">
                            Four reception works 24/7
                        </div>
                        <div className="icw">
                          <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            02 security
                        </div>
                        <div className="text">
                            Qualified round-the-clock security
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                </div>
                <div className="cd">
                    <div className="col">
                        <div className="title">
                            01 reception
                        </div>
                        <div className="text">
                            Four reception works 24/7
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            02 security
                        </div>
                        <div className="text">
                            Qualified round-the-clock security
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                </div>
                <div className="cd">
                    <div className="col">
                        <div className="title">
                            05 cleaning service
                        </div>
                        <div className="text">
                            Cleaning service is work everyday
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            06 elevators
                        </div>
                        <div className="text">
                            The best elevators working 24/7
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                </div>
                <div className="cd">
                    <div className="col">
                        <div className="title">
                            07 safe service
                        </div>
                        <div className="text">
                           Personal safe service
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">
                            08 concierges
                        </div>
                        <div className="text">
                           Concierges service
                        </div>
                        <div className="icw">
                            <BsArrowUpRight className="ic"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Comfort;