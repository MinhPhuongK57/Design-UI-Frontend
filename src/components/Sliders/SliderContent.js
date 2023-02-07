import React from 'react';
import bgHeader from '../../images/Group 427319171.png';
import logoHeader from '../../images/Group 427321643.png';

function SliderContent({ activeIndex, SliderImages }) {
    return (
        <section>
            {SliderImages.map((slide, index) => (
                <div key={index} className={index === activeIndex ? 'slide active' : 'inactive'}>
                    <img className='sliders-image-logo' src={logoHeader} />
                    <img className='sliders-image-content' src={bgHeader} />
                    <h2 className='sliders-title'>{slide.titleH}</h2>
                    <h3 className='sliders-description'>{slide.description}</h3>
                    <button type='button' className='sliders-button'>
                        Đăng ký ngay
                    </button>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
