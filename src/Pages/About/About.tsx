import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className="Container">
                <div className="Content">
                    <div className="Pre-title">About</div>
                    <div className="SmallText">I am currently a freshman at Harvard College </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
