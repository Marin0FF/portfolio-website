import React from 'react'
import Button from './Button'

const HeroContent = ({greeting, shortBio}) => (
    <section className="hero is is-fullheight">
        <div className="hero-body container">
            <div className="columns">
                <div className="column is-half">
                    <h1 className="title is-size-1-desktop is-size-2-tablet is-size-2-mobile">{greeting}</h1>
                    <h1 className="subtitle is-size-1-desktop is-size-3-tablet is-size-3-mobile">{shortBio}</h1>
                    <Button type="primary-cta" size="is-large" styles="is-rounded" icon="arrow-forward-outline" label="See my work"/>
                </div>
            </div>

        </div>
    </section>
);

export default HeroContent;