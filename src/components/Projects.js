import React from 'react'
import Card from './Card'
import SectionTitle from './SectionTitle'

const ProjectSection = () => (
    <>
        < SectionTitle
            title="My projects" subtitle="Have a look at what I've been working on!"
        />
        <section className="section is-small has-background-dark">
                <div className="container is-widescreen">
                    <div className="columns is-flex-wrap-wrap is-justify-content-center">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
        </section>
    </>
);

export default ProjectSection;