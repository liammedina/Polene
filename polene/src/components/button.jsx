import React from "react";

function Button1({ text, clickButton, click }) {
    return(
        <button className={ clickButton ? "clickbutton" : "resetButton" } 
        onClick={click}>
            {text}
        </button>
    )
}
export default Button1;