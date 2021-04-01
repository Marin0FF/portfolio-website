import React from 'react';

const SectionTitle = ({title, subtitle}) => (
    <section className="section is-medium">
        <h1 className="title is-2 has-text-centered">{title}</h1>
        <h2 className="subtitle is-4 mt-1 has-text-centered">{subtitle}</h2>
        <hr/>
    </section>
);

export default SectionTitle;