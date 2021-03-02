import React from 'react';

const HeroContent = ({greeting, shortBio}) => (
    <div className="hero-content columns">
        <div className="column is-two-fifths is-offset-2">
            <h1 className="title is-size-1-desktop is-size-3-tablet has-text-white">{greeting}</h1>
            <h1 className="subtitle is-size-1-desktop is-size-3-tablet has-text-white">{shortBio}</h1> 
        </div> 
    </div>
);

export default HeroContent;