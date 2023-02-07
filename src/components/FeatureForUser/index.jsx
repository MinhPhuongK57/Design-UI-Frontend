import React from 'react';
import imgFeatureForUser from '../../images/Devices/Apple/iPhone 12 Mini.png';

const FeatureForUser = () => {
    return (
        <div className='featureForUser container__pad'>
            <h3 className='featureForUser__title'>Những tính năng nổi bật của App khách hàng</h3>
            <div className='featureForUser__content'>
                <img className='featureForUser__content--img' src={imgFeatureForUser} alt='ImgContentAppForUser' />
                <div className='featureForUser__content--items'>
                    <div className='featureForUser-group'>
                        <div className='featureForUser-group--number'>1</div>
                        <div className='featureForUser-group--text'>
                            <div className='featureForUser-group--text__title'>
                                Tìm kiếm dịch vụ chỉ trong một nút nhấn
                            </div>
                            <div className='featureForUser-group--text__subTitle'>
                                Hãy tận hưởng sự tiện lợi chỉ trong một ứng dụng.
                            </div>
                        </div>
                    </div>
                    <div className='featureForUser-group'>
                        <div className='featureForUser-group--number active'>2</div>
                        <div className='featureForUser-group--text'>
                            <div className='featureForUser-group--text__title'>Kết nối thông tin đa dạng</div>
                            <div className='featureForUser-group--text__subTitle'>
                                Không chỉ chat giờ đây bạn có thể voice chat và gọi điện để kết nối nhanh chóng với
                                người thực hiện
                            </div>
                        </div>
                    </div>
                    <div className='featureForUser-group'>
                        <div className='featureForUser-group--number'>3</div>
                        <div className='featureForUser-group--text'>
                            <div className='featureForUser-group--text__title'>Cập nhật trạng thái dịch vụ</div>
                            <div className='featureForUser-group--text__subTitle'>
                                Bạn có thể biết được tình trạng sửa chửa hoặc công việc đã hoàn thành đến đâu khi vắng
                                nhà.
                            </div>
                        </div>
                    </div>
                    <div className='featureForUser-group'>
                        <div className='featureForUser-group--number last'>4</div>
                        <div className='featureForUser-group--text'>
                            <div className='featureForUser-group--text__title'>
                                Hoàn tất dịch vụ an toàn và chất lượng
                            </div>
                            <div className='featureForUser-group--text__subTitle'>
                                Bạn sẽ yên tâm khi thấy hình ảnh báo cáo và dễ dàng đánh giá chất lượng dịch vụ bất cứ
                                khi nào
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureForUser;
