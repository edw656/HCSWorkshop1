import React from "react";
import PreviewBox from "../../Components/PreviewBox/PreviewBox";
import Footer from "../../Components/Footer/Footer";
import ProjectsData from "../../Pages/Projects/ProjectsData";
import Navbar from "../../Components/Navbar/Navbar";


export default function Projects() {
	return (
		<div>
			<Navbar/>
			<div className="Container">
				<div className="Content">
					<div className="Pre-title">projects</div>
					{
						ProjectsData.map(data=>{
							return <PreviewBox title={data.title} subtext={data.subtext} link={data.link} description={data.description} image={data.image} type={data.type} />
						})
					}
				</div>
			</div>
			<Footer/>
		</div>
	);
};
