import React from 'react';
import './UploadInfo.scss'

const UploadInfo = () => {
    return (
        <div>
            <h3>title your video</h3>
            <input type='text' placeholder='Add a title to your video' />
            <h3>add a video description</h3>
            <input type='text' placeholder='Add a description to your video' />
            <button>publish</button>
            <p>cancel</p>
        </div>
    );
};

export default UploadInfo;
