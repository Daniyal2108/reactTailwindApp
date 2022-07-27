import React from "react";

const Button = (props) => {

    return <>
    <button onClick={props.onClick} className={props.className}>{props.icon} {props.name}</button>
    </>
}

export default Button;