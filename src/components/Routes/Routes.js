import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import HomePage from "../home/HomePage/HomePage";

const WebRoutes = () => {
    return <>
    <BrowserRouter>    
    <Routes>
        <Route path="/" element={<HomePage />} />
            
        
        
        <Route path="/about" element={<div>About Page</div>} />
            
        
        <Route path="/youth" element={<div>Youth Page</div>} />

        <Route path="/VFP" element={<div>Vintage Family Portrait Page</div>} />

        <Route path="/efiks" element={<div>EFIKS Page</div>} />


        <Route path="/shop" element={<div>Shop Page</div>} />

        <Route path="/contact" element={<div>Contact Page</div>} />

    </Routes>
    </BrowserRouter>
    </>
}

export default WebRoutes;