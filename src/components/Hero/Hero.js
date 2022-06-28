import React from 'react';
import Brainflixlogo from "../../assets/images/Mohan-muruge.jpg"
import './Hero.scss'

const Hero = () => {
    return (
        <div>
            <video className='hero__video'><img src={Brainflixlogo}/></video>
        </div>
    );
};

export default Hero;