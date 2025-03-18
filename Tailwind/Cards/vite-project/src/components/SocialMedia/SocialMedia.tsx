import SocialIcon from "../../ui/SocialIcon/SocialIcon";
import React from "react"

interface SocialMediaProps {
    socials?: {name: string, url: string}[];
    className?: string;
}

export default function socialMedia({socials, className}: SocialMediaProps) {
    if (socials == undefined || socials.length == 0) {
        return null;
    }

    socials.sort((a, b) => a.name.localeCompare(b.name));

    let liste = socials.map((s, index) => (
        <li key={index}>
            <a href={s.url}><SocialIcon name={s.name}/></a>
        </li>
    ));
    
    return <ul className={`flex space-x-4 ${className}`}>{liste}</ul>;
}