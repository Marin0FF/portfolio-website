import React, {useEffect, useState} from 'react'
import SectionTitle from './SectionTitle'
import ProfilePic from './ProfilePicture'
import Button from './Button'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const AboutSection = ({id}) => {
    const [profile, setAuthor] = useState(0);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'author']{
            bio,
            "profileImage": image.asset->url,
            "resumeUrl": resume.asset->url,
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);

    }, []);

    return (
        <div id="about">
            <SectionTitle
                title="About me" subtitle="Get to know me better."
            />
            <ProfilePic src={urlFor(profile.profileImage).url()} />
            <div className="section container is-widescreen has-text-weight-light has-text-weight-light has-text-centered">
                <div className="is-size-4 is-size-6-mobile mb-6">
                    <BlockContent blocks={profile.bio} projectId="lpkhcp48" dataset="production"/>
                </div>
                <Button
                    type="download"
                    action={profile.resumeUrl}
                    size="is-medium"
                    styles="is-rounded"
                    icon="document-outline"
                    label="Download resume"
                />
            </div>
        </div>
    )
};

export default AboutSection;
