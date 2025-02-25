import React from 'react';
import Team from '../Team/Team';
import { useState } from 'react';
import { userList } from '../../data/Data';

export default function TeamGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextMember = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % userList.length);
    };

    const prevMember = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + userList.length) % userList.length);
    };

    return (
        <div className="team-gallery">
            <Team
                title="Our Team"
                description="Meet our team members"
                members={[userList[currentIndex]]}
            />
            <button onClick={prevMember}>Previous</button>
            <button onClick={nextMember}>Next</button>
        </div>
    );
}