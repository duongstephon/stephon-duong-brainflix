import React from 'react';
import './UploadButtons.scss';
import { Link } from 'react-router-dom';

const UploadButtons = () => {
  return (
    <div className='upload-buttons'>
      <button className='upload-buttons__button'>publish</button>
      <Link to="/" className='upload-buttons__cancel'>cancel</Link>     
    </div>
  );
};

export default UploadButtons;
