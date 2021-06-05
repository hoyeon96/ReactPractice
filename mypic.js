import React from 'react';
import mypic from './img/mypic.jpg';

function Avatar(){
    return (
        <div>
            <img
                src={mypic} 
                style={{
                    height: "180px",
                    border: "3px solid white",
                    borderRadius: "80%"
                }}/>
        </div>
    )
}

export default Avatar;