import React, {useState, useEffect} from "react";

const email = "edan@college.harvard.edu"

export default function Email(){
    let [isRevealed, setReveal] = useState<boolean>();
    useEffect(()=>{
        setReveal(false);
    }, [])
    if (!isRevealed) {
        return <div className="SmallText" onClick={()=> setReveal(true)}>Click to reveal Email</div>
    }
    else{
        return <a href="mailto:edan@college.harvard.edu"><div className="SmallText"><span>e</span>
            <span>d</span>
            <span>a</span>
            <span>n</span>
            <span>@</span>
            <span>c</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>g</span>
            <span>e</span>
            <span>.</span>
            <span>h</span>
            <span>a</span>
            <span>r</span>
            <span>v</span>
            <span>a</span>
            <span>r</span>
            <span>d</span>
            <span>.</span>
            <span>e</span>
            <span>d</span>
            <span>u</span></div></a>
    }
}