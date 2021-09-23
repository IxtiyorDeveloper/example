import React from 'react';
import './circle.scss'

function Circle({text, bg}) {
    return (
        <div className="circle" style={{backgroundColor:bg}}>
            {text}
        </div>
    );
}

export default Circle;