import React from 'react';
import iconService1 from '../../images/end_footer/Path 15.png';
import iconService2 from '../../images/end_footer/Group 8219.png';
import iconService3 from '../../images/end_footer/Group 8218.png';
import iconService4 from '../../images/end_footer/Group 8217.png';

const WCAService = () => {
    return (
        <div className='container__pad wCAService'>
            <div className='wCAService__title'>Vì sao chọn iService</div>
            <div className='wCAService__subTitle'>
                Xu hướng tiêu dùng hiện đại: Tập trung các dịch vụ được lựa chọn hàng đầu. Thay đổi mô hình kinh doanh
                để thích ứng với xu hướng tiêu dùng mới: Ứng dụng công nghệ mới nhất
            </div>
            <div className='wCAService__content'>
                <div className='wCAService__content--item'>
                    <img src={iconService1} alt='iconServiceEndFooter' className='wCAService__content--item-img' />
                    <p className='wCAService__content--item-description'>Chuyên nghiệp</p>
                </div>
                <div className='wCAService__content--item'>
                    <img src={iconService2} alt='iconServiceEndFooter' className='wCAService__content--item-img' />
                    <p className='wCAService__content--item-description'>Nhanh chóng</p>
                </div>
                <div className='wCAService__content--item'>
                    <img src={iconService3} alt='iconServiceEndFooter' className='wCAService__content--item-img' />
                    <p className='wCAService__content--item-description'>Đa dịch vụ</p>
                </div>
                <div className='wCAService__content--item'>
                    <img src={iconService4} alt='iconServiceEndFooter' className='wCAService__content--item-img' />
                    <p className='wCAService__content--item-description'>An toàn, chất lượng</p>
                </div>
            </div>
        </div>
    );
};

export default WCAService;
