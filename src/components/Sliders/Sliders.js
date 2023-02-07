import React, { useEffect, useState } from 'react';

import Dots from './Dots';
import SliderContent from './SliderContent';
import SliderImages from '../../Static/data/slider-images';

const ken = SliderImages.length - 1;

function Sliders() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === ken ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <header className='sliders'>
            <SliderContent activeIndex={activeIndex} SliderImages={SliderImages} />
            <Dots
                activeIndex={activeIndex}
                SliderImages={SliderImages}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            />
        </header>
    );
}

export default Sliders;
