import React from 'react';
import './UploadInfo.scss';

// Video Title and Description
const UploadInfo = (props) => {
  const { title, description, handleChange } = props

  return (
    <section className='upload-info'>
      <label className='upload-info__header'>title your video</label>
      <input 
        className='upload-info__typable' 
        type='text' 
        placeholder='Add a title to your video'
        name="title"
        value={title} 
        onChange={handleChange} />
      <label className='upload-info__header'>add a video description</label>
      <textarea 
        className='upload-info__typable upload-info__typable--video-description' 
        type='text' 
        placeholder='Add a description to your video'
        name="description"
        value={description} 
        onChange={handleChange} />  
    </section>
  );
};

export default UploadInfo;
