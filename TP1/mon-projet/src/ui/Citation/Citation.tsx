import React from "react";

interface CitationProps{
    children?: string;
    className?: string;
}

export default function CItation(props: CitationProps){
    if (props.children == undefined || props.children == ""){
        return null;
    }
    return (
        <div className = {`text-sm ${props.className}`} >{props.children}</div>
    )
}