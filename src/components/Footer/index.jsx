import React from 'react';
import iconFB from '../../images/Group 1012.png';
import iconNI from '../../images/Group 1017.png';
import iconTW from '../../images/Group 8198.png';

const Footer = () => {
    return (
        <div className='container__pad footer'>
            <div className='footer__content'>
                <div className='footer__content--logo'>iService</div>
                <div className='footer__content--icon'>
                    <div className='footer__content--icon-title'>Follow us:</div>
                    <div className='footer__content--icon-items'>
                        <img src={iconFB} alt='IconFB' />
                        <img src={iconNI} alt='iconNI' />
                        <img src={iconTW} alt='iconTW' />
                    </div>
                </div>
            </div>
            <div className='footer__menu'>
                <div className='footer__menu--group'>
                    <div className='footer__menu--group-title'>Home</div>
                    <ul className='footer__menu--group-items'>
                        <li>About us</li>
                        <li>Intro</li>
                        <li>Features</li>
                        <li>Cricing</li>
                    </ul>
                </div>
                <div className='footer__menu--group'>
                    <div className='footer__menu--group-title'>Support</div>
                    <ul className='footer__menu--group-items'>
                        <li>Shipping & Returns</li>
                        <li>Contact Us</li>
                        <li>Our Partners</li>
                    </ul>
                </div>
                <div className='footer__menu--group'>
                    <div className='footer__menu--group-title'>Resources</div>
                    <ul className='footer__menu--group-items'>
                        <li>Our Work</li>
                        <li>Services</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='footer__menu--group'>
                    <div className='footer__menu--group-title'>Contact Us</div>
                    <ul className='footer__menu--group-items'>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='footer__cRight'>(c) 2021 - Delicious, All rights reserved.</div>
        </div>
    );
};

export default Footer;
