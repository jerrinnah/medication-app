import React from "react";
import "./button.css";


const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
];

const Size = [
    "btn--medium", "btn--small", "btn--long"
];
export const Button = ({children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize}) => {

        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = Size.includes(buttonSize) ? buttonSize : Size[0];

        return (
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        )

};