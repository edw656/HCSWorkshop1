import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css";


export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-links">
                <a className="link noLinkStyle" href="/home">
                    Home
                </a>
                <a className="link noLinkStyle" href="/projects">
                    Projects
                </a>
                <a className="link noLinkStyle" href="/experience">
                    Experience
                </a>
                <a className="link noLinkStyle" href="/about">
                    About me
                </a>
                <a className="link noLinkStyle" href="/contact">
                    Contact
                </a>
            </div>
        </div>);
};