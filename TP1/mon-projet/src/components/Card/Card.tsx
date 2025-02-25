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
        <article className="card flex flex-col w-100 bg-gray-300 text-black text-left">
            <Avatar className="card__avatar w-90 h-90 rounded-2xl self-center" src={somebody.picture} alt={alt} />
            <h4 className="text-3xl font-medium">{somebody.firstname} {somebody.lastname}</h4>
            {somebody.email && <Email className="card__email text-emerald-600 text-2xl font-normal">{somebody.email}</Email>}
            {somebody.citation && <Citation className="card__citation">{somebody.citation}</Citation>}
            {somebody.socials && <SocialMedia socials={somebody.socials} className="card__socials" />}
        </article>
    );
}
