import React from 'react';

const Contact = () => {
    return (
        <div className='container__pad contact'>
            <div className='contact__box'>
                <div className='contact__box--text'>
                    <div className='contact__box--text-title'>Liên lạc với iService</div>
                    <div className='contact__box--text-description'>
                        Hãy kết nối với chúng tôi để được giải đáp và trải nghiệm dịch vụ một cách trọn vẹn và đầy đủ
                        nhất.
                    </div>
                </div>
                <div className='contact__box--form'>
                    <input type='text' placeholder='Nhập mail của bạn để được tư vấn' />
                    <button type='button'>Đăng ký</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
