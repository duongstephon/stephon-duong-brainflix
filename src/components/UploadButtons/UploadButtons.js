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
      <Link to='/' className='upload-buttons__button' onClick={this.handleUpload}>
        <button className='upload-buttons__publish'>publish</button>
      </Link>
        <Link to="/" className='upload-buttons__cancel'>cancel</Link>     
      </div>
    );
  }
};

export default UploadButtons;
