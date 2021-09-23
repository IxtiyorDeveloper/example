import React from 'react';
import './footer.scss'
import map from '../../../asset/img/location_Map.jpg'
import img1 from '../../../asset/img/footer_partners.png'
import img2 from '../../../asset/img/footer__wasaf.png'

function Footer(props) {
    return (
        <div className='footer pd'>
            <div className="w60">
                <div>
                    <img src={map} alt="" className="img"/>
                </div>
                <div className="w60C">
                    <div className="w60I">
                        <div className="title">
                            address
                        </div>
                        <div className="text">
                            49a Tashkent Avenue, Shaykhontohur District,
                            Tashkent, Uzbekistan
                        </div>
                        <div className="ad">
                            Admission is open daily from 9.00 am to 7.00 pm
                        </div>
                    </div>
                    <div className="w40I">
                        <div className="title">
                            contact info
                        </div>
                        <div className="wr">
                            <div className="label">
                                Phone
                            </div>
                            <div className="ne">
                                +998 (71) 200-88-22
                            </div>
                        </div>
                        <div className="wr">
                            <div className="label">
                                Phone
                            </div>
                            <div className="ne">
                                +998 (71) 200-88-22
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wr5">
                <div><img src={img1} alt=""/></div>
                <div className="center">
                    &#169;  Nest One Group 2021.All right reserved
                </div>
                <div className="cr">
                   <div className="t1">
                       Created by
                   </div> <span className="fol"> meraki &times;</span> <img src={img2} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Footer;