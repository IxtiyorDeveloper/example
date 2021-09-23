import React from 'react';
import './titleAndText.scss'

function TitleAndText({title,text}) {
    return (
        <div className="wrapperT">
            <div className="title">
                {title}
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    );
}

export default TitleAndText;