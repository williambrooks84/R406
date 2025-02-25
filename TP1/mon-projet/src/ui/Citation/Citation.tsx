import React from "react";

interface CitationProps{
    children?: string;
    className?: string;
}

export default function Citation(props: CitationProps){
    if (props.children == undefined || props.children == ""){
        return null;
    }
    return (
        <div className = {`text-2xl font-normal ${props.className}`} >{props.children}</div>
    )
}