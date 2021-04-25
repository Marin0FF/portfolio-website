import React, {useEffect, useState} from 'react'
import { Link } from "react-scroll";
import sanityClient from '../client'
import SectionTitle from './SectionTitle'
import ContactLink from './ContactLink'
import Button from './Button'

const ContactSection = ({id}) => {
    const [contacts, setContact] = useState(0);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
                email,
                socials{...},
            }`)
            .then((data) => setContact(data[0]))
            .catch(console.error);
    }, []);

    const socialsClone = {...contacts.socials};

    return (
        <div id="contact">
            <SectionTitle title="Contact" subtitle="Let's keep in touch." />
            <div className="container">
                <div className="buttons is-grouped contact-links is-justify-content-center mb-6">
                    {
                        Object.keys(socialsClone)
                        .map(key => (
                            <ContactLink link={socialsClone[key]} icon={`logo-${key}`} />
                        ))
                    }
                </div>
                <div className="buttons is-justify-content-center ">
                <Button
                    type="mail"
                    action={`mailto:${contacts.email}`}
                    size="is-medium" styles="is-rounded"
                    icon="mail-outline"
                    label={contacts.email}
                />
                </div>
                <section className="section is-medium is-flex is-justify-content-center">
                    <Link
                        className="link-navbar"
                        to="home"
                        smooth={true}
                        duration={500}
                    >
                        <Button type="back-to-top" size="is-large" styles="is-round is-light" icon="chevron-up-outline" iconSize="large"/>
                    </Link>
                </section>
            </div>
        </div>
    )
};

export default ContactSection;

