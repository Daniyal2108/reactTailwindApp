import React from "react";

const Container = (props) => {
    return <div className={`w-full max-w-max mx-auto ${props.className}`}>{props.children}</div>
        
}

export default Container;