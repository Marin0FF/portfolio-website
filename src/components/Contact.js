import React from 'react'
import SectionTitle from './SectionTitle'

const ContactSection = () => (
    <>
        <SectionTitle title="Lets keep in touch" subtitle="Lorem ipsum sit." />
        <div className="container">
            <div className="field is-grouped contact-links is-justify-content-center">
                <p class="control">
                    <button className="button is-link">
                    Save changes
                    </button>
                </p>
                <p class="control">
                    <button className="button">
                    Cancel
                    </button>
                </p>
                <p class="control">
                    <button className="button is-danger">
                    Delete post
                    </button>
                </p>
            </div>
        </div>   
    </>

);

export default ContactSection;