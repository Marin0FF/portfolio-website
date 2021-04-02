import React from 'react'
import Button from './Button'

const Bio = ({content}) => (
    <div className="section container is-widescreen has-text-weight-light has-text-weight-light has-text-centered">
        <p className="is-size-4 is-size-6-mobile mb-6">{content}</p>
        <Button type="download" size="is-medium" styles="is-rounded" icon="document-outline" label="Download resume"/>
    </div>
);

export default Bio;

