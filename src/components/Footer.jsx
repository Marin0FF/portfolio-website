import React from 'react'
import Button from './Button'

const Footer = () => (
    <>
        <section className="section is-medium is-flex is-justify-content-center">
            <Button type="back-to-top" size="is-large" styles="is-round" icon="chevron-up-outline" iconSize="large"/>
        </section>
        <footer className="footer">
            <div className="content has-text-centered has-text-dark">
                <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </>
);

export default Footer;