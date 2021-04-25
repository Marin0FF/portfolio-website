import React from 'react'
import { Link, useLocation } from "react-router-dom";

const ProjectPreview = ({thumbnail, title, subtitle, slug, date, toggleModal}) => {
    const location = useLocation();

    return (
        <div className="column is-half-tablet is-one-quarter-widescreen">
            <div className="card">
                <Link
                    to={{
                        pathname: `${slug}`,
                        state: {background: location}
                    }}
                    key={slug}
                >
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={thumbnail} alt={`${title} logo`} />
                        </figure>
                    </div>
                    <div className="card-content has-background-primary">
                        <p className="title is-5">{title}</p>
                        <p className="subtitle is-6 mb-3">{subtitle}</p>
                        <time dateTime="2016-1-1" className="is-size-7 has-text-white">Completed on {date}</time>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default ProjectPreview;

