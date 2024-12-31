

import React from "react";
import Header from "./Components/Header.js";
import  Navbar from "./Components/Navbar.js" ;
import Analysis from "./Components/Analysis.js";
import MainContent from "./Components/MainContent.js";
import Footer from "./Components/Footer.js";
export default function App() {
    return (
        <div className="first-div">
         
            <Header />
            <Navbar />
            <Analysis />
            <MainContent />
            <Footer />
        </div>
    )
}