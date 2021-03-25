import React from 'react';

const Bio = ({content}) => (
    <div className=" section container is-widescreen has-text-weight-light has-text-weight-light has-text-centered">
        <p className="is-size-4 is-size-6-mobile mb-6">{content}</p>
        <button className="button is-hidden-touch is-primary is-medium is-rounded">
            <span>Download resume</span> 
            <span className="icon is-medium">
            <ion-icon name="document-outline"></ion-icon>
            </span>
        </button>
        <button className="button is-hidden-desktop is-primary is-rounded">
            <span>Download resume</span> 
            <span className="icon is-small">
            <ion-icon name="document-outline"></ion-icon>
            </span>
        </button>
    </div>
);

export default Bio;

