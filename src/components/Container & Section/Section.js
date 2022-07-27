import React from "react";

const Section = (props) => {
    let {className, style} = props;
    return <div className={className} style={style}>{props.children}</div>
}

export default Section;