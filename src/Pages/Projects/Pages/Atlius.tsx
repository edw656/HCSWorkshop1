import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

export default function Atlius() {
    return (<div>
            <div className="Container">
                <Navbar/>
                <div className="Content">
                    <div className="Pre-title">Atlius</div>
                    <div className="Title">Public Discord Bot</div>
                    <div className="Title">108 Servers | 364.6k Users</div>
                    <div className="Title"></div>
                    <div className="Title">Synopsis</div>
                    <div className="SmallText">A public bans database. Allows users to report TOS-breaking or
                        misbehaving users to add onto a global banlist. Server owners can add this bot to automatically
                        purge their servers of malicious users on the banlist.
                    </div>
                    <div className="Title">Framework and APIs</div>
                    <div className="SmallText">
                        The frontend is managed by discord.js API. Written with node.js framework.
                        <br/>
                        <br/>
                        Powered by sqlite3 database.
                        <br/>
                        <br/>
                        Utilizes discord.js, and imgur API.
                    </div>
                </div>
                <Footer/></div>
        </div>
    );
}