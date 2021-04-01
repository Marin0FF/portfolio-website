import React from 'react'
import SectionTitle from './SectionTitle'
import ContactLink from './ContactLink'

const ContactSection = () => (
    <>
        <SectionTitle title="Contact" subtitle="Lets keep in touch." />
        <div className="container">
            <div className="field is-grouped contact-links is-justify-content-center">
                <ContactLink link="https://www.behance.net/hristomarinov" icon="logo-github" />
                <ContactLink link="https://www.behance.net/hristomarinov" icon="logo-twitter" />
                <ContactLink link="https://www.behance.net/hristomarinov" icon="logo-behance" />
                <ContactLink link="https://www.behance.net/hristomarinov" icon="logo-linkedin" />
            </div>
        </div>   
    </>

);

export default ContactSection;