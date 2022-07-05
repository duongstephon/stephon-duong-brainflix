import './UploadPage.scss'
import React, { Component } from 'react'
import UploadVideo from '../../components/UploadVideo/UploadVideo'
import UploadInfo from '../../components/UploadInfo/UploadInfo'

export default class UploadPage extends Component {
  render() {
    return (
      <div className="upload-page">
        <h1 className='upload-page__header'>Upload Video</h1>
        <UploadVideo />
        <UploadInfo />
      </div>
    )
  }
}
