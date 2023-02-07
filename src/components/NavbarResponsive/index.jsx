import React from 'react';
import menuResponsive from '../../Static/data/menu-responsive';

function NavbarResponsive() {
    return (
        <menu className='navbar_responsive'>
            <input type='checkbox' id='active' />
            <label htmlFor='active' className='navbar-btn'>
                <i className='fas fa-bars'></i>
            </label>
            <div className='wrapper__responsive'>
                <ul className='wrapper__responsive--ul'>
                    <li className='wrapper__responsive--li'>
                        <a className='wrapper__responsive--link' href=''>
                            Trang chủ
                        </a>
                    </li>
                    <li className='wrapper__responsive--li'>
                        <a className='wrapper__responsive--link' href=''>
                            Ứng dụng
                        </a>
                    </li>
                    <li className='wrapper__responsive--li'>
                        <a className='wrapper__responsive--link' href=''>
                            Dich vụ
                        </a>
                    </li>
                    <li className='wrapper__responsive--li'>
                        <a className='wrapper__responsive--link' href=''>
                            Khách hàng
                        </a>
                    </li>
                    <li className='wrapper__responsive--li'>
                        <a className='wrapper__responsive--link' href=''>
                            Đánh giá
                        </a>
                    </li>
                    <li className='wrapper__responsive--li'>
                        <a className='wrapper__responsive--link' href=''>
                            Liên hệ
                        </a>
                    </li>
                </ul>
            </div>
        </menu>
    );
}

export default NavbarResponsive;
