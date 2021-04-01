import React from 'react';

const ContactLink = ({link, icon}) => (
<>
    <a href={link} className="contact-link mx-5 is-hidden-touch">
        <button class="button is-xlarge is-round">
            <span class="icon is-medium has-text-primary">
                <ion-icon name={icon} size="large"></ion-icon>
            </span>
        </button>
    </a>
    <a href={link} className="contact-link mx-2 is-hidden-desktop">
        <button class="button is-large is-round">
            <span class="icon is-medium has-text-primary">
                <ion-icon name={icon} size="large"></ion-icon>
            </span>
        </button>
    </a>
</>
);

export default ContactLink;