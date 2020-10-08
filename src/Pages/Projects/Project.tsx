import React from "react";
import atlius from './Pages/Atlius'
import ceramic_microtubes from "./Pages/Ceram_Microtubes";
import confesscord from "./Pages/Confesscord";
import eureka_daily_polls from "./Pages/Eureka_Daily_Polls";
import eff_insulation from "./Pages/High_Eff_Insulation";
import kotori from "./Pages/Kotori"
import ml_laser from "./Pages/ML_Fuel_Cells";
import team_stats from "./Pages/Team_Stats";

import "./Project.css"

interface ProjectProps {
    projectId: string;
}

const projects:{[key:string]:any} = {
    atlius, ceramic_microtubes, confesscord, eureka_daily_polls, eff_insulation, kotori, ml_laser, team_stats
}

export default function Project(props: ProjectProps) {
    return projects[props.projectId] === undefined ? <div>Project not found</div> : projects[props.projectId]();
}