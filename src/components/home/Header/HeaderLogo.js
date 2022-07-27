import React from "react";

const HeaderLogo = () => {
    return <div className="w-max">
         <img className="w-full" style={{filter: "invert(8%) sepia(21%) saturate(505%) hue-rotate(520deg) brightness(75%) contrast(70%)"}} src={require('../../Slicing/logo-05.svg').default} alt="" />
    </div>
}

export default HeaderLogo;