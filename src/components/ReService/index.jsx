import React, { Component } from 'react';

import Slider from 'react-slick';
import SliderServices from '../../Static/data/slider-services';
import imgService from '../../images/alliance/appliances.png';

export default class SliderService extends Component {
    render() {
        const sliders = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <div className='container__pad reService'>
                <h2 className='reService__title'> Tìm hiểu thêm về dịch vụ</h2>
                <Slider {...sliders} className='reService__slider'>
                    {SliderServices.map((sliderService, index) => {
                        return (
                            <div className='reService__slider--box' key={index}>
                                <img src={imgService} alt='imgService1' className='reService__slider--box-img' />
                                <h4 className='reService__slider--box-title'>{sliderService.title}</h4>
                                <p className='reService__slider--box-description'>{sliderService.subTitle}</p>
                                <p className='reService__slider--box-description'>{sliderService.bSubTitle}</p>
                                <button type='button' className='reService__slider--box-button'>
                                    Tìm hiểu thêm
                                </button>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
