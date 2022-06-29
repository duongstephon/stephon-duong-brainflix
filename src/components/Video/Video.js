import React from 'react';

const Video = (props) => {
    return (
        <div>
            <img src={props.displayedVideo.image} />
        </div>
    );
};

export default Video;