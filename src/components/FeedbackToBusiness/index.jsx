import Feedbacks from '../../Static/data/feedback';
import React from 'react';
import imagesUserFeedback from '../../images/Img_topBusiness/Rectangle 3470.png';

const FeedbackToBusiness = () => {
    return (
        <div className='container__pad feedbackToBusiness'>
            <div className='feedbackToBusiness__title'>Phản hồi doanh nghiệp</div>
            <div className='feedbackToBusiness__subTitle'>Chia sẻ từ các cộng sự trải nghiệm cùng iService</div>
            <div className='feedbackToBusiness__boxFeedback'>
                <div className='feedbackToBusiness__boxFeedback--container'>
                    <div className='feedbackToBusiness__boxFeedback--header'>
                        <img
                            src={imagesUserFeedback}
                            alt='imagesUserFeedback'
                            className='feedbackToBusiness__boxFeedback--header-img'
                        />
                        <div className='feedbackToBusiness__boxFeedback--header-content'>
                            <div className='username'>john K.</div>
                            <div className='title'>La pasteria</div>
                        </div>
                    </div>
                    <div className='feedbackToBusiness__boxFeedback--groupStar'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>
                    <div className='feedbackToBusiness__boxFeedback--description'>
                        Cảm ơn iService đã tạo cơ hội cho các doanh nghiệp đến gần với khách hàng hơn.
                    </div>
                </div>
                <div className='feedbackToBusiness__boxFeedback--container'>
                    <div className='feedbackToBusiness__boxFeedback--header'>
                        <img
                            src={imagesUserFeedback}
                            alt='imagesUserFeedback'
                            className='feedbackToBusiness__boxFeedback--header-img'
                        />
                        <div className='feedbackToBusiness__boxFeedback--header-content'>
                            <div className='username'>Esther Howard</div>
                            <div className='title'>La pasteria</div>
                        </div>
                    </div>
                    <div className='feedbackToBusiness__boxFeedback--groupStar'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>
                    <div className='feedbackToBusiness__boxFeedback--description'>
                        Bên cạnh khách hàng cần tìm kiếm dịch vụ, thì người cần việc cũng rất nhiều. iService đã giúp
                        công ty cung cấp nhân lực như chúng tôi rất hữu ích
                    </div>
                </div>
                <div className='feedbackToBusiness__boxFeedback--container'>
                    <div className='feedbackToBusiness__boxFeedback--header'>
                        <img
                            src={imagesUserFeedback}
                            alt='imagesUserFeedback'
                            className='feedbackToBusiness__boxFeedback--header-img'
                        />
                        <div className='feedbackToBusiness__boxFeedback--header-content'>
                            <div className='username'>Robert Fox</div>
                            <div className='title'> La pasteria</div>
                        </div>
                    </div>
                    <div className='feedbackToBusiness__boxFeedback--groupStar'>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                        <p>&#9733;</p>
                    </div>
                    <div className='feedbackToBusiness__boxFeedback--description'>
                        Các báo cáo và đơn hàng theo từng dịch vụ rất cụ thể. Là một ứng dụng đáng để hợp tác bền vững.
                    </div>
                </div>
            </div>
            {/* 
            <div className='feedbackToBusiness__boxFeedback'>
                {Feedbacks.map((feedback, index) => {
                    <div key={index} className='feedbackToBusiness__boxFeedback--container'>
                        <div className='feedbackToBusiness__boxFeedback--header'>
                            <img
                                src={imagesUserFeedback}
                                alt='imagesUserFeedback'
                                className='feedbackToBusiness__boxFeedback--header-img'
                            />
                            <div className='feedbackToBusiness__boxFeedback--header-content'>
                                <div className='username'>{feedback.username}</div>
                                <div className='title'>{feedback.title}</div>
                            </div>
                        </div>
                        <div className='feedbackToBusiness__boxFeedback--groupStar'>
                            <p>&#9733;</p>
                            <p>&#9733;</p>
                            <p>&#9733;</p>
                            <p>&#9733;</p>
                            <p>&#9733;</p>
                        </div>
                        <div className='feedbackToBusiness__boxFeedback--description'>{feedback.description}</div>
                    </div>;
                })}
            </div> */}
        </div>
    );
};

export default FeedbackToBusiness;
