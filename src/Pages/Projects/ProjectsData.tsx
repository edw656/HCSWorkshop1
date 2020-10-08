import {PreviewBoxProps} from "../../Components/PreviewBox/PreviewBox";
import discord from "../../Media/discord_logo.png"
import kotori from "../../Media/kotori.png"
import confesscord from "../../Media/Confesscord.png"
import atlius from "../../Media/Atlius.png"
import eureka from "../../Media/eureka_polls_demo.gif"
import ceramic from "../../Media/ceram_demo.gif"
import npm from "../../Media/npm.png"
import github from "../../Media/github_logo.png"
import insulation from "../../Media/insulation_demo.gif"


const ProjectsData: Array<PreviewBoxProps> = [
    {
        title: "Discord Bots",
        type: "category"
    },
    {
        title: "Kotori",
        subtext: "Private custom server bot | 29.6k Users",
        link: {
            url: "/kotori",
            prefix: "/projects"
        },
        description: "A multi-feature bot with a marriage system, a currency system, connect4/tictactoe, music streaming, staff applications, moderation, auto-moderation, captcha, and more...",
        image: kotori,
        type: "left"
    },
    {
        title: "Confesscord",
        subtext: "Pubic server bot | 252 Servers, 245.5k Users",
        link: {
            url: "/confesscord",
            prefix: "/projects"
        },
        description: "A simple-to-use anonymous confessions bot, basic curse word filtering of confessions, single-command setup, confessions logging for moderation ",
        image: confesscord,
        type: "right"
    },
    {
        title: "Team Stats",
        subtext: "Private custom server bot | 35k Users",
        link: {
            url: "/team_stats",
            prefix: "/projects"
        },
        description: "Creates Teams that counts team member messages on a weekly, monthly, and all-time leaderboard",
        image: discord,
        type: "left"
    },
    {
        title: "Atlius",
        subtext: "Pubic server bot | 108 Servers, 364.6k Users",
        link: {
            url: "/atlius",
            prefix: "/projects"
        },
        description: "Global Bans database (allows server owners to automatically purge users that are flagged as malicious or TOS breakers), moderation features (kick, timed mute, ban), music streaming from Youtube",
        image: atlius,
        type: "right"
    },
    {
        title: "Discord Bot Template",
        link: {
            url: "https://github.com/3chospirits/discord-bot-template",
            prefix: "external"
        },
        description: "A simple boilerplate coding template for discord bots with advanced command, event, and global function handlers.\n" +
            "https://github.com/3chospirits/discord-bot-template",
        image: github,
        type: "left"
    },
    {
        title: "Misc Coding Projects",
        type: "category"
    },
    {
        title: "Eureka Daily Poll Visuals",
        link: {
            url: "/eureka_daily_polls",
            prefix: "/projects"
        },
        description: "Created interactive data visualizations for daily poll questionnaires using React.js framework and D3.js visuals",
        image: eureka,
        type: "right"
    },
    {
        title: "npm badwords-filter",
        link: {
            url: "https://www.npmjs.com/package/badwords-filter",
            prefix: "external"
        },
        description: "Open-source npm package for detecting dirty words. Works with l33t text, accented characters, and extra/missing repeated characters. Compatible with native string or regex list\n" +
            "https://www.npmjs.com/package/badwords-filter",
        image: npm,
        type: "left"
    },
    {
        title: "Research",
        type: "category"
    },
    {
        title: "ML algorithm for detection of defects in laser-sintered fuel cells",
        link: {
            url: "/ml_laser",
            prefix: "/projects"
        },
        description: "Photonics Technology Lab, The Holcombe Department of Electrical and Computer Engineering, Clemson University, South Carolina \n" +
            "Developed a machine learning algorithm for identifying and scoring images of laser-sintered fuel cell samples with a 92% accuracy\n",
        image: eureka,
        type: "right"
    },
    {
        title: "A fabrication process for ceramic microtubes",
        link: {
            url: "/ceramic_microtubes_paper.pdf",
            prefix: process.env.PUBLIC_URL
        },
        description: "Fuel Cell Lab, College of Aeronautics and Eng., Kent State University, Ohio\n" +
            "Designed a coating device and fabrication process utilizing sol-gel technology for developing ceramic microtubes\n",
        image: ceramic,
        type: "left"
    },
    {
        title: "High efficiency insulation materials testing",
        link: {
            url: "/insulation_paper.pdf",
            prefix: process.env.PUBLIC_URL
        },
        description: "Fuel Cell Lab, College of Aeronautics and Eng., Kent State University, Ohio\n" +
            "",
        image: insulation,
        type: "right"
    },
];
export default ProjectsData;