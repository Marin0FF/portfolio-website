import React from 'react'
import Button from './Button'
import { Link } from "react-scroll";

const HeroContent = ({greeting, shortBio}) => (
    <section className="hero is is-fullheight">
        <div className="hero-body container">
            <div className="columns">
                <div className="column is-half">
                    <h1 className="title is-size-1-desktop is-size-2-touch">{greeting}</h1>
                    <h1 className="subtitle is-size-1-fullhd is-size-2-desktop is-size-3-touch">{shortBio}</h1>
                    <Link
                        className="link-navbar"
                        to="projects"
                        smooth={true}
                        duration={500}
                    >
                        <Button type="primary-cta" size="is-large" styles="is-rounded" icon="arrow-forward-outline" label="See my work"/>
                    </Link>
                </div>
            </div>

        </div>
    </section>
);

export default HeroContent;