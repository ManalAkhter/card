import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} My Website. All rights reserved. </p>
                <ul className='social-links'>
                    <li>
                        <a
                        href='https://twitter.com' target="_blank" rel="noopenernoreferrer">Twitter</a>
                    </li>
                    <li>
                        <a
                        href='https://facebook.com'
                        target='_blank'
                        rel='noopenernoreferrer'>Facebook</a>
                    </li>
                    <li>
                        <a
                        href='https://linkedin.com'
                        target='_blank'
                        rel='noopenernoreferrer'>LinkedIn</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;