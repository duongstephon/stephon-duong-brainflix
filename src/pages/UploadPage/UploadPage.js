import './UploadPage.scss'
import React, { Component } from 'react'
import UploadVideo from '../../components/UploadVideo/UploadVideo'
import UploadInfo from '../../components/UploadInfo/UploadInfo'
import UploadButtons from '../../components/UploadButtons/UploadButtons'

export default class UploadPage extends Component {
  render() {
    return (
      <div className="upload-page">
        <h1 className='upload-page__header'>Upload Video</h1>
        <div className='upload-page__video-section'>
          <UploadVideo />
          <UploadInfo />
        </div>
        <UploadButtons />
      </div>
    )
  }
}
