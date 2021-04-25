import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import SectionTitle from './SectionTitle'
import ProjectPreview from './ProjectPreview'


const ProjectSection = ({id}) => {
    const [projectData, setProject] = useState(0);

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "project"]
            | order(date desc){
                title,
                subtitle,
                date,
                slug,
                link,
                thumbnail{
                    asset->{
                        url,
                    },
                }
            }`)
            .then((data) => setProject(data))
            .catch(console.error);
    }, []);

    return (
        <div id="projects" >
            < SectionTitle
                title="My projects" subtitle="Have a look at what I've been working on!"
            />
            <section className="section is-small has-background-dark">
                    <div className="container is-widescreen">
                        <div className="columns is-flex-wrap-wrap is-justify-content-center">
                            {projectData &&
                                projectData.map((project, index) => (
                                    <>
                                        <ProjectPreview
                                            thumbnail={project.thumbnail.asset.url}
                                            title={project.title}
                                            subtitle={project.subtitle}
                                            slug={"/" + project.slug.current}
                                            date={new Date(project.date).toLocaleDateString()}
                                            key={index}
                                        />
                                    </>
                            ))}
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ProjectSection;
