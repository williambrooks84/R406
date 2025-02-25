import React from 'react';
import { FaInstagram, FaSquarespace, FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaRegCommentDots } from 'react-icons/fa';

interface SocialIconProps {
    name: string;
}

export default function SocialIcon({ name }: SocialIconProps) {
    const icons = {
        instagram: <FaInstagram />,
        behance: <FaSquarespace />,
        github: <FaGithubSquare />,
        twitter: <FaTwitterSquare />,
        xtwitter: <FaTwitterSquare />,
        meta: <FaRegCommentDots />,
        facebook: <FaFacebookSquare />,
        default: <FaRegCommentDots />,
    };

    let media = name.toLowerCase() as keyof typeof icons;
    const icon = icons[media] !== undefined ? icons[media] : icons.default;

    return <>{icon}</>;
}