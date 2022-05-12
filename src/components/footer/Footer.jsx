import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">Movies App</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>Contact us</a>
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>Term of services</a>
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>About us</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>Live</a>
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>FAQ</a>
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>Premium</a>
                        <a href='https://www.instagram.com/rzdzaky/' rel='noreferrer' target='_blank'>Pravacy policy</a>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/movie">You must watch</Link>
                        <Link to="/movie">Recent release</Link>
                        <Link to="/movie">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
