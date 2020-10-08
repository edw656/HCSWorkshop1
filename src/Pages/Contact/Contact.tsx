import React from 'react'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Icons from "../../Icons/Icons";
import Email from "./Email";

export default function Contact() {
    return (
        <div>
            <Navbar/>
            <div className="Container">
                <div className="Content">
                    <div className="Pre-title">Contact</div>
                    <div className="SmallText"></div>
                    <div className="Subtitle1">Email</div>
                    <Email/>
                    <Icons/>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
