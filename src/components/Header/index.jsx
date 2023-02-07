import React from 'react';

const Header = () => {
    return (
        <div className='header container__pad'>
            <ul className='header__menu'>
                <div className='header__menu--logo'>iService</div>
                <div className='header__menu--items'>
                    <a href='' className='header__menu--link'>
                        home
                    </a>
                    <a href='' className='header__menu--link'>
                        product
                    </a>
                    <a href='' className='header__menu--link'>
                        services
                    </a>
                    <a href='' className='header__menu--link'>
                        blog
                    </a>
                    <a href='' className='header__menu--link'>
                        contact
                    </a>
                </div>
            </ul>
        </div>
    );
};

export default Header;
