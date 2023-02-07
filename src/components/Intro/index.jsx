import React from 'react';
import introVideo from '../../images/squidgame.mp4';

const Intro = () => {
    return (
        <div className='container__pad intro'>
            <video controls className='intro-video'>
                <source src={introVideo} />
            </video>
        </div>
    );
};

export default Intro;
