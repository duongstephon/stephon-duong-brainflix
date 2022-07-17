import React from 'react';
import './DisplayedVideo.scss'
import { api_url} from '../../utils'

//Hero video
const Video = (props) => {
    return (
        <div className='hero'>
            <video className='hero__video' controls poster={api_url + props.current.image} />
        </div>
    );
};

export default Video;
