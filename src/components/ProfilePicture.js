import React from 'react';

const ProfilePic = ({src}) => (
    <div className="image profilePicture">
        <img src={src} alt="Profile" />
    </div>
);

export default ProfilePic;