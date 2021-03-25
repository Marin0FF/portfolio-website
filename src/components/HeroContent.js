import React from 'react';

const HeroContent = ({greeting, shortBio}) => (
    <section className="hero is is-fullheight">
        <div className="hero-body container">
            <div className="columns">
                <div className="column is-half">
                    <h1 className="title is-size-1-desktop is-size-2-tablet is-size-2-mobile">{greeting}</h1>
                    <h1 className="subtitle is-size-1-desktop is-size-3-tablet is-size-3-mobile">{shortBio}</h1>
                    <button className="button is-hidden-touch is-primary is-large is-rounded primary-cta">
                        <span>See my work</span> 
                        <span className="icon is-medium">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </span>
                    </button>
                    <button className="button is-hidden-desktop is-primary is-rounded primary-cta">
                            <span>See my work</span> 
                            <span className="icon is-small">
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                    </button>
                </div>
            </div>

        </div>
    </section>
);

export default HeroContent;