import React from 'react';
import imageBusiness1 from '../../images/Img_topBusiness/Rectangle 3468.png';
import imageBusiness2 from '../../images/Img_topBusiness/Rectangle 3469.png';
import imageBusiness3 from '../../images/Img_topBusiness/Rectangle 3470.png';

const TopBusiness = () => {
    return (
        <div className='container__pad topBusiness'>
            <div className='topBusiness__title'>Top doanh nghiệp</div>
            <div className='topBusiness__subTitle'>
                Đồng hành cùng ứng dụng không thể thiếu các doanh nghiệp có vai trò và đóng góp lớn cho hệ sinh thái.
                Mục tiêu cùng trở thành mũi nhọn tại một số lĩnh vực.
            </div>
            <div className='topBusiness__images'>
                <img src={imageBusiness1} alt='imageBusiness' />
                <img src={imageBusiness2} alt='imageBusiness' />
                <img src={imageBusiness3} alt='imageBusiness' />
            </div>
        </div>
    );
};

export default TopBusiness;
