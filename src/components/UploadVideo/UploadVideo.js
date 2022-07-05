import React from 'react';
import UploadVideoPreview from '../../assets/images/Upload-video-preview.jpg'


const UploadVideo = () => {
    return (
        <div>
            <h3>video thumbnail</h3>
            <img src={UploadVideoPreview} alt="preview video thumbnail" />
        </div>
    );
};

export default UploadVideo;
