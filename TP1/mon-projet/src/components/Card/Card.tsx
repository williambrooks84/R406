import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import Avatar from '../../ui/Avatar/Avatar';
import Citation from '../../ui/Citation/Citation';
import Email from '../../ui/Email/Email';

interface CardProps {
    firstname: string;
    lastname: string;
    picture: string;
    email?: string;
    citation?: string;
    socials?: { name: string, url: string }[];
    clasName? : string;
}

export default function Card(somebody: CardProps) {
    let alt: string = somebody.firstname + " " + somebody.lastname;

    return (
        <article className="card">
            <Avatar className="card__avatar" src={somebody.picture} alt={alt} />
            <h4>{somebody.firstname} {somebody.lastname}</h4>
            <Email className="card__email">{somebody.email}</Email>
            <Citation className="card__citation">{somebody.citation}</Citation>
            <SocialMedia socials={somebody.socials} className="card__socials" />
        </article>
    );
}
