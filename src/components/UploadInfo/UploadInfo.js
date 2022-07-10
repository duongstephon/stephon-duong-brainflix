import React from 'react';
import './UploadInfo.scss';

// Video Title and Description
const UploadInfo = () => {
  return (
    <section className='upload-info'>
      <label className='upload-info__header'>title your video</label>
      <input className='upload-info__typable' type='text' placeholder='Add a title to your video' />
      <label className='upload-info__header'>add a video description</label>
      <textarea className='upload-info__typable upload-info__typable--video-description' type='text' placeholder='Add a description to your video' />  
    </section>
  );
};

export default UploadInfo;
