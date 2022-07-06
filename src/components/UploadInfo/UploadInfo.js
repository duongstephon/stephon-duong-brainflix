import React from 'react';
import './UploadInfo.scss';

const UploadInfo = () => {
  return (
    <section className='upload-info'>
      <h3 className='upload-info__header'>title your video</h3>
      <input className='upload-info__typable' type='text' placeholder='Add a title to your video' />
      <h3 className='upload-info__header'>add a video description</h3>
      <textarea className='upload-info__typable upload-info__typable--video-description' type='text' placeholder='Add a description to your video' />  
    </section>
  );
};

export default UploadInfo;
