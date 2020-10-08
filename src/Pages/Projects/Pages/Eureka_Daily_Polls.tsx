import React from 'react';
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import ProjectsData from "../ProjectsData";
import PreviewBox from "../../../Components/PreviewBox/PreviewBox";
import "../../../Components/PreviewBox/PreviewBox.css"
import polls_list from "../../../Media/Eureka_Daily_Polls/polls_list.png"
import response_display from "../../../Media/Eureka_Daily_Polls/responses_display.png"
import age_display from "../../../Media/Eureka_Daily_Polls/age_display.png"
import ethnicity_display from "../../../Media/Eureka_Daily_Polls/ethnicity_display.png"
import filters_display from "../../../Media/Eureka_Daily_Polls/filters_display.png"
import gender_display from "../../../Media/Eureka_Daily_Polls/gender_display.png"
import political_display from "../../../Media/Eureka_Daily_Polls/political_display.png"
import state_display from "../../../Media/Eureka_Daily_Polls/state_display.png"

const img_style: React.CSSProperties = {width: "50%", height: "auto"};

export default function Eureka_Daily_Polls() {
    return (<div>
            <div className="Container">
                <Navbar/>
                <div className="Container">
                    <div className="Content">
                        <div className="Pre-title">Eureka Daily Polls</div>
                        <div className="Title">Video Demo</div>
                        <iframe className="Youtube-embed" width="1120" height="630"
                                src="https://www.youtube.com/embed/3TDA3hJoBhs" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        <div className="Title">Synopsis</div>
                        <div className="SmallText">During an internship for Eureka Surveys, I was assigned to the task
                            of creating a website page that allowed users to interact with and visualize the data from
                            each of the app's daily polls.
                            <br/>
                            A live version of the site can be found here: <span><a
                                href="https://eurekasurveys.com/polls">Eurekasurveys.com/polls</a></span>
                        </div>
                        <div className="Flex-container">
                            <div>
                                <img style={img_style} src={polls_list}/>
                            </div>

                            <div className="SmallText">Polls list that display the last 10 recent daily polls<br/><br/>The
                                first poll has additional display info, and each box is linked to their corresponding
                                data visuals page
                                page
                            </div>
                        </div>
                        <div className="Flex-container">
                            <div className="SmallText">Each individual poll page is titled with the original question,
                                respondent count, and the responses
                            </div>
                            <img style={img_style} src={response_display}/></div>

                        <div className="Flex-container"><img style={{height: 600, width: "auto"}}
                                                             src={filters_display}/>
                            <div className="SmallText">All visualizations can be filtered by the various demographic
                                properties. The graphical displays can also be toggled to show by percents or
                                frequencies.
                            </div>
                        </div>

                        <div className="Flex-container"><img style={img_style} src={age_display}/>
                            <div className="SmallText">Responses are divided by individual demographic data.<br/>For
                                example, age.
                            </div>
                        </div>

                        <div className="Flex-container">
                            <div className="SmallText">Responses divided by ethnicity demographics.</div>
                            <img style={img_style} src={ethnicity_display}/></div>

                        <div className="Flex-container">
                            <img style={img_style} src={gender_display}/>
                            <div className="SmallText">Responses divided by gender demographics.</div>
                        </div>

                        <div className="Flex-container">
                            <div className="SmallText">Responses divided by political view demographics.</div>
                            <img style={img_style} src={political_display}/>
                        </div>

                        <div className="Flex-container">
                            <img style={img_style} src={state_display}/>
                            <div className="SmallText">Winning responses displayed by state, marked by corresponding
                                colors.
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/></div>
        </div>
    );
}