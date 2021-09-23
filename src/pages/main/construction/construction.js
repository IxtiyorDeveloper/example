import React from 'react';
import './construction.scss'
import data from './data'
import img1 from "../../../asset/img/contructionProgress.jpg"
import TitleAndText from "../titleAndText/titleAndText";

function Construction(props) {
    return (
        <div className="construction pd">
            <TitleAndText title={"Construction progress"} text={"Videos in real construction"}/>
            <div className="video">
                <div className="v-wr">
                    <img src={img1} alt="" className="img"/>
                </div>
                <div className="ms">
                    <div className="year">
                        2021
                    </div>
                    <div className="grid">
                        {
                          data.map((i,k) => {
                              if (i.year === 2021){
                                  return(
                                      <div className="col" key={k}>
                                          {i.month}
                                      </div>
                                  )
                              }
                          })
                        }
                    </div>
                    <div className="year">
                        2021
                    </div>
                    <div className="grid">
                        {
                            data.map((i,k) => {
                                if (i.year === 2020){
                                    return(
                                        <div className="col" key={k}>
                                            {i.month}
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Construction;