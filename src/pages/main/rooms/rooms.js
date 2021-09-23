import React, {useState} from 'react';
import './rooms.scss'
import {BsArrowUpLeft} from "react-icons/bs";
import img1 from '../../../asset/img/meeting__rom.jpg'
import img2 from '../../../asset/img/cinema__room.jpg'
import img3 from '../../../asset/img/children__room.jpg'

function Rooms(props) {
    const [num, setNum] = useState(1);
    const [img,setImg] = useState(img1)
    return (
        <div className="rooms pd">
            <div className="wrapper">
                <div className="col">
                    Nest One's Rooms
                </div>
                <div className="col">
                    Project nest is not just buildings,
                    it is a project for comfortable life
                </div>
            </div>
            <div className="gallery">
                <div className="col">
                    <img src={img} alt="" className="img"/>
                    <div className="text">
                        {
                            num === 1 &&
                            <div>
                                Meeting room for a favourable price during contrsuciton the
                                highest building in Central Asia
                            </div>
                        }
                        {
                            num === 2 &&
                            <div>
                                Cinema room for a favourable price during contrsuciton the
                                highest building in Central Asia
                            </div>
                        }
                        {
                            num === 3 &&
                            <div>
                                Children's room for a favourable price during contrsuciton the
                                highest building in Central Asia
                            </div>
                        }
                    </div>
                </div>
                <div className="col">
                    <div className="long" onClick={() => {setNum(1); setImg(img1)} }>
                        <BsArrowUpLeft className={`${num === 1 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 1 ? "text1" : " text"}`}>
                            meeting room
                        </div>
                    </div>
                    <div className="long" onClick={() => {setNum(2); setImg(img2)}}>
                        <BsArrowUpLeft className={`${num === 2 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 2 ? "text1" : " text"}`}>
                            cinema
                        </div>
                    </div>
                    <div className="long" onClick={() => {setNum(3); setImg(img3)}}>
                        <BsArrowUpLeft className={`${num === 3 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 3 ? "text1" : " text"}`}>
                            children's rooms
                        </div>
                    </div>
                    <div className="long" onClick={() => setNum(4)}>
                        <BsArrowUpLeft className={`${num === 4 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 4 ? "text1" : " text"}`}>
                            training hall
                        </div>
                    </div>
                    <div className="long" onClick={() => setNum(5)}>
                        <BsArrowUpLeft className={`${num === 5 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 5 ? "text1" : " text"}`}>
                        library
                        </div>
                    </div>
                    <div className="long" onClick={() => setNum(6)}>
                        <BsArrowUpLeft className={`${num === 6 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 6 ? "text1" : " text"}`}>
                       hall for guests
                        </div>
                    </div>
                    <div className="long" onClick={() => setNum(7)}>
                        <BsArrowUpLeft className={`${num === 7 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 7 ? "text1" : " text"}`}>
                       lounge terraces
                        </div>
                    </div>
                    <div className="long" onClick={() => setNum(8)}>
                        <BsArrowUpLeft className={`${num === 8 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 8 ? "text1" : " text"}`}>
                         sky walk
                        </div>
                    </div>
                    <div className="long" onClick={() => setNum(9)}
                         style={{borderBottom:"1px solid #E5E5E5"}}
                    >
                        <BsArrowUpLeft className={`${num === 9 ? "icon1" : " icon"}`}/>
                        <div className={`${num === 9 ? "text1" : " text"}`}>
                         telescope
                        </div>
                    </div>
                    <div className="circle">
                        View All
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rooms;