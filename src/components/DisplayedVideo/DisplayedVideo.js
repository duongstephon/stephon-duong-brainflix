import React from 'react';
import './DisplayedVideo.scss'

//Hero video
const Video = (props) => {
    return (
        <div className='hero'>
            <video className='hero__video' controls poster={props.current.image} />
        </div>
    );
};

export default Video;
