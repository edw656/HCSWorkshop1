import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ProjectsData from "../ProjectsData";
import PreviewBox from "../../../Components/PreviewBox/PreviewBox";

export default function Ceram_Microtubes() {
    return (<div>
            <div className="Container">
                <Navbar/>
                <div className="Content">
                    <div className="Pre-title">Designing a coating device and fabrication process for developing ceramic
                        microtubes
                    </div>
                    <div className="Subtitle2">Why Ceramic Microtubes?</div>
                    <div className="SmallText"></div>
                </div>
                <Footer/></div>
        </div>
    );
}