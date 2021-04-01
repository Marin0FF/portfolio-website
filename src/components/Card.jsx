import React from 'react';

const Card = ({text}) => (
    <div className="column is-half-tablet is-one-quarter-widescreen">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content has-background-primary">
                <p className="title is-5">Example Project</p>
                <p className="subtitle is-6 mb-3">Subtitle</p>
                <p className="has-text-white mb-1">{text}</p>
                <time dateTime="2016-1-1" className="is-size-7 has-text-white">Posted on 21 March 2021</time>
            </div>
        </div>  
    </div>
);

export default Card;

