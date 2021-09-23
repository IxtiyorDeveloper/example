import React from 'react';
import './sendRequest.scss'
import {BsArrowUpRight} from 'react-icons/bs'

function SendRequest(props) {
    return (
        <div className="sendRequest pd">
           <div className="button">
               send request  <BsArrowUpRight className="icon"/>
           </div>
        </div>
    );
}

export default SendRequest;