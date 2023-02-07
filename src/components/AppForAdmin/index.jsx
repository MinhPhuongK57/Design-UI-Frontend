import React from 'react';
import apple from '../../images/apple.png';
import ggPlay from '../../images/ggplay.png';
import imgAppForAdmin from '../../images/Apple Macbook Pro 15_ Space Grey.png';

const AppForAdmin = () => {
    return (
        <div className='container__pad appForAdmin'>
            <div className='appForAdmin__img'>
                <img src={imgAppForAdmin} alt='ImgContentAppForAdmin' />
            </div>
            <div className='appForAdmin__content'>
                <h5>Ứng dụng dành cho Quản lý</h5>
                <p>
                    Mỗi một nhánh dịch vụ cung cấp hoạt động độc lập với các lĩnh vực kinh doanh khác, nhưng hoạt động
                    của các dịch vụ sẽ đều được báo cáo cho quản lí cấp cao của công ty sở hữu ứng dụng.
                </p>
                <div className='appForAdmin__content--img'>
                    <img src={ggPlay} alt='imgGgPlay' />
                    <img src={apple} alt='imgApple' />
                </div>
                <a href='' type='button' className='appForAdmin__content--button'>
                    Xem thêm
                </a>
            </div>
        </div>
    );
};

export default AppForAdmin;
