import React from 'react';
import './UploadInfo.scss';
import { Link } from 'react-router-dom';

const UploadInfo = () => {
  return (
    <div>
      <article>
        <h3 className='upload-info__header'>title your video</h3>
        <input className='upload-info__typable' type='text' placeholder='Add a title to your video' />
        <h3 className='upload-info__header'>add a video description</h3>
        <textarea className='upload-info__typable upload-info__typable--video-description' type='text' placeholder='Add a description to your video' />  
      </article>
      <div className='upload-info__nav'>
        <button className='upload-info__button'>publish</button>
        <Link to="/" className='upload-info__cancel'>cancel</Link>     
      </div>
    </div>
  );
};

export default UploadInfo;
