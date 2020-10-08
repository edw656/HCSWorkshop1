import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

export default function Confesscord() {
    return (<div>
            <div className="Container">
                <Navbar/>
                <div className="Content">
                    <div className="Pre-title">Confesscord</div>
                    <div className="Title">Public Discord Bot</div>
                    <div className="Title">252 Servers | 245.5k Users </div>
                    <div className="Title"></div>
                    <div className="Title">Synopsis</div>
                    <div className="SmallText">A simple-to-use, anonymous confessions bot. Allows server owners to add in anonymous confessions in less than 30 seconds with a single command!</div>
                    <div className="Title">Framework and APIs</div>
                    <div className="SmallText">
                        The frontend is managed by discord.js API. Written with node.js framework.
                        <br/>
                        <br/>
                        Powered by sqlite3 database.
                        <br/>
                        <br/>
                        Utilizes discord.js API.
                    </div>
                    <div className="Title">Features</div>
                    <div className="SmallText"><li>Custom configurable settings for confession listening, sending, and logging channels</li>
                    <li>Single command to setup bot and configure channel permissions</li>
                    <li>Basic curse-word and link filtering</li>
                    <li>Confession logs of original confessors for moderation purposes</li>
                    <li>Fully customizable embeded displays of confessions</li></div>
                </div>
                <Footer/></div>
        </div>
    );
}