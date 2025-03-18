import React from 'react';

interface EmailProps {
    children?: string;
    className?: string;
}

function checkEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function Email(props: EmailProps) {
    if (props.children == undefined || props.children == "") {
        return null;
    }

    if (checkEmail(props.children) == false) {
        console.error(props.children + "is not a valid address");
        return null; //Ne rien afficher si email pas valide
    }

    return (
        <span className={`text-sm ${props.className}`}>{props.children}</span>
    );
}