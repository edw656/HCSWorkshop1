import React from "react";
import {Link} from "react-router-dom"
import Icons from "../../Icons/Icons";
import Footer from "../../Components/Footer/Footer";

import "./Home.css";

export default function Home() {
	return (
		<div>
			<div className="Container">
				<div className="Content">
					<div className="Pre-title">Hello</div>
					<div className="SmallText">Nice to meet you, I am</div>
					<div className="Title"> Edward Dan </div>
					<div className="Links">
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
					<Icons/>
				</div>
				<Footer/>
			</div>

		</div>
	);
}
