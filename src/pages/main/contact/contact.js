import React, {useState} from 'react';
import "./contact.scss"
import TitleAndText from "../titleAndText/titleAndText";
import hoverArrow from "../../../asset/img/hover_arrow.png";
import NumberFormat from "react-number-format";
import validator from 'validator'


function Contact(props) {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value
        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
        if (e.target.value === '') {
            setEmailError('')
        }
    }
    return (
        <div className="contact pd">
            <TitleAndText title={"Contact us"} text={"Request more info"}/>
            <div className="cf">
                <div className="col">
                    <div className="cw">
                        <label className="containerch">
                            I agree with the terms of policy
                            <input type="checkbox"/>
                            <span className="checkmark"/>
                        </label>
                    </div>
                    <div className="line"/>
                    <div className="mo">
                        <div className="mo">
                            <div className="text1">
                                Get more information
                            </div>
                            <div className="in-button">
                                <div className="wr">
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
                <div className="col">
                    <div className="row">
                        <div className="label">
                            Your full name <div className="dot">*</div>
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="row">
                        <div className="label">
                            Your phone number <div className="dot">*</div>
                        </div>
                        <NumberFormat
                            mask="-"
                            allowEmptyFormatting
                            format="+998 ## ### ## ##"
                            className="input"
                        />
                    </div>
                    <div className="row">
                        <div className="label">
                            Email Address
                        </div>
                        <input onChange={(e) => validateEmail(e)} type="text" className="input"/>
                        <div style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{emailError}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;