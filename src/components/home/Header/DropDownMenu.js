import React from "react";

const DropDownMenu = (props) => {
    return <div className={`block drop-shadow-lg lg:py-3 lg:px-4 py-2 px-5 text-left lg:absolute lg:top-11 lg:m-0 mx-3 mt-3 mb-2 static border-x bg-white border-y border-gray-300 rounded-lg ${props.className}`} style={props.style}>
                <div className="w-5 h-5 border-t-2 border-l-2 rotate-45 border-gray-300 z-20 lg:left-auto left-1/2   bg-white absolute" style={{top: "-11px"}}></div>
                {props.children}
            </div>
}

export default DropDownMenu;