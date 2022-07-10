import React from 'react';
import UploadVideoPreview from '../../assets/images/Upload-video-preview.jpg'
import './UploadVideo.scss'

//Uploaded Video thumbnail
const UploadVideo = () => {
    return (
        <div className='upload-video'>
            <h3 className="upload-video__header">video thumbnail</h3>
            <img className='upload-video__thumbnail' src={UploadVideoPreview} alt="preview video thumbnail" />
        </div>
    );
};

export default UploadVideo;
