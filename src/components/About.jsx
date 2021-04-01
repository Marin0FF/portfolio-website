import React from 'react';
import SectionTitle from './SectionTitle'
import ProfilePic from './ProfilePicture'
import Bio from './Bio'

const src = "http://via.placeholder.com/320";
const content = "I am a second year student at the University of Gloucestershire studying Digital Media and Web Technologies. I’m a creative person with an eye for design, who can learn quickly. I don't shy away from a difficult task and I enjoy working with others towards it. Currently I am looking for an opportunity that would allow me to work with like minded people as well as further develop my abilities.";

const AboutSection = () => (
    <>
        <SectionTitle
            title="About me" subtitle="Get to know me better."
        />
        <ProfilePic src={src} />
        <Bio content={content} />
    </>
);

export default AboutSection;