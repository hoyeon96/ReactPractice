import React from 'react';

function Avatar(){
    return (
        <div>
            <img
                src="img/mypic.jpg"
                style={{
                    height: "180px",
                    border: "3px solid white",
                    borderRadius: "80%"
                }}/>
        </div>
    )
}

export default Avatar;