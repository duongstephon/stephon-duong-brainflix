import React from 'react';

const Video = (props) => {
    return (
        <div>
            <img src={props.current.image} />
        </div>
    );
};

export default Video;