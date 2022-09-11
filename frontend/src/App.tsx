import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import ProductDetails from './pages/ProductDetails';




function App() {


    return (
        <BrowserRouter>
                    
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/productDetails:productId" element={<ProductDetails />} /> */}
                
 
            </Routes>
        </BrowserRouter >
    )
}

export default App;
