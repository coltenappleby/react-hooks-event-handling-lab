// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {

    function blurEvent() {
        console.log("Good!")
    }

    function focusEvent() {
        console.log("Hey! Eyes on me!")
    }

    return (
        <div> 
            <button onBlur={blurEvent} onFocus={focusEvent} > Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;