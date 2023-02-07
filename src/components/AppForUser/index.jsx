import React from 'react';
import apple from '../../images/apple.png';
import ggPlay from '../../images/ggplay.png';
import imgAppForUser from '../../images/Group 8214.png';

const AppForUser = () => {
    return (
        <div className='container__pad appForUser'>
            <div className='appForUser__img'>
                <img src={imgAppForUser} alt='ImgContentAppForUser' />
            </div>
            <div className='appForUser__content'>
                <h5>Ứng dụng dành cho khách hàng</h5>
                <p>
                    Ý tưởng chung đằng sau "đa dạng hóa" là cung cấp hệ sinh thái Dịch vụ phục vụ trọn vẹn mọi nhu cầu
                    của khách hàng từ những nhu cầu nhỏ nhất
                </p>
                <div className='appForUser__content--img'>
                    <img src={ggPlay} alt='imgGgPlay' />
                    <img src={apple} alt='imgApple' />
                </div>
                <a href='' type='button' className='appForUser__content--button'>
                    Xem thêm
                </a>
            </div>
        </div>
    );
};

export default AppForUser;
