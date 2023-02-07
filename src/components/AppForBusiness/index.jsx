import React from 'react';
import apple from '../../images/apple.png';
import ggPlay from '../../images/ggplay.png';
import imgAppForBusiness from '../../images/Group 8214.png';

const AppForBusiness = () => {
    return (
        <div className='container__pad appForBusiness'>
            <div className='appForBusiness__img'>
                <img src={imgAppForBusiness} alt='ImgContentappForBusiness' />
            </div>
            <div className='appForBusiness__content'>
                <h5>Ứng dụng dành cho doanh nghiệp</h5>
                <p>
                    Một trong những lợi thế của Dịch vụ đa ngành là nó giúp giảm tác động từ những biến động bất thường
                    trong bất kì một ngành nào. Mang đến người tiêu dùng đa dạng cho doanh nghiệp
                </p>
                <div className='appForBusiness__content--img'>
                    <img src={ggPlay} alt='imgGgPlay' />
                    <img src={apple} alt='imgApple' />
                </div>
                <a href='' type='button' className='appForBusiness__content--button'>
                    Xem thêm
                </a>
            </div>
        </div>
    );
};

export default AppForBusiness;
