import React from 'react';
import './UploadButtons.scss';
import { Link } from 'react-router-dom';

//Publish and cancel buttons
class UploadButtons extends React.Component {

  handleUpload = () => {
    alert("Your video has been uploaded!")
  }

  render() {
    return (
      <div className='upload-buttons'>
        <button type='submit' className='upload-buttons__publish'>publish</button>
        <Link to="/" className='upload-buttons__cancel'>cancel</Link>     
      </div>
    );
  }
};

export default UploadButtons;
