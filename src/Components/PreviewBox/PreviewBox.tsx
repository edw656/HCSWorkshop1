import React from "react";
import "./PreviewBox.css";

interface Link {
    url: string;
    prefix: "external" | string
}

export interface PreviewBoxProps {
    title: string;
    subtext?: string;
    link?: Link,
    description?: string;
    image?: string;
    type: "left" | "right" | "hover" | "category";
}

const imageStyle: React.CSSProperties = {
    height: 200,
    width: 200,
    objectFit: "contain",
}

export default function PreviewBox(props: PreviewBoxProps) {
    const {title, link, description, image, type, subtext} = props;
    let url = "";
    let urlPrefix = "external";
    if (link !== undefined) {
        url = link.url;
        urlPrefix = link.prefix
    }

    if (type === "category") {
        return (<div className="Title" id={title.replace(" ", "_")} style={{marginBottom: 30, paddingTop: 60}}>
            {title}
        </div>)
    }
    if (type === "left" || type === "hover") {
        return (
            <div className="Preview-container dropShadow">
                <div className="Preview-image">
                    <img style={imageStyle} src={image} alt=""/>
                </div>
                <div className="Preview-divider"/>
                <div className="Preview-text">
                    <a className="noLinkStyle" href={(urlPrefix === "external" ? "" : urlPrefix) + url}>
                        <div className="Preview-title">{title}</div>
                        <div className="Preview-subtext">{subtext}</div>
                    </a>
                    <p className="Preview-description">{description}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="Preview-container dropShadow">
            <div className="Preview-text">
                <a className="noLinkStyle" href={(urlPrefix === "external" ? "" : urlPrefix) + url}>
                    <div className="Preview-title">{title}</div>
                    <div className="Preview-subtext">{subtext}</div>
                </a>
                <p className="Preview-description">{description}</p>
            </div>
            <div className="Preview-divider"/>
            <div className="Preview-image">
                <img style={imageStyle} src={image} alt=""/>
            </div>
        </div>
    );
}
