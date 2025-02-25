import Card from '../Card/Card';
import React from 'react';

interface MemberProps {
    picture: string;
    firstname: string;
    lastname: string;
    email?: string;
    text?: string;
    socials?: { name: string, url: string }[];
}

interface TeamProps {
    title: string;
    description: string;
    members: MemberProps[];
}

export default function Team(team: TeamProps) {
    return (
        <div className = "team">
            <h3 className = "team__title">{team.title}</h3>
            <h5 className = "team__description">{team.description}</h5>
            <ul className = "team__members">
                {team.members.map((member, index) => {
                    return (
                        <li className = "team__member" key = {index}>
                            <Card {...member} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}