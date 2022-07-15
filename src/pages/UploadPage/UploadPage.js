import './UploadPage.scss';
import React, { Component } from 'react';
import UploadVideo from '../../components/UploadVideo/UploadVideo';
import UploadInfo from '../../components/UploadInfo/UploadInfo';
import UploadButtons from '../../components/UploadButtons/UploadButtons';
import axios from 'axios';
import { api_url } from '../../utils';

class UploadPage extends Component {
  state = {
    title: '',
    description: '',
  }

  addVideo = (event) => {
    event.preventDefault();

    axios.post(`${api_url}/videos`, {
      title: this.state.title,
      description: this.state.description,
      image: '/images/Upload-video-preview.jpg',
      channel: 'Stephon',
      views: 0,
      likes: 0,
      video: "https://project-2-api.herokuapp.com/stream",
      duration: "4:01",
      timestamp: new Date(Date.now()),
      comments: []
    })
    .then(() => {
      this.props.history.push('/')
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="upload-page">
        <h1 className='upload-page__header'>Upload Video</h1>
        <form onSubmit={this.addVideo}>
          <div className='upload-page__video-section'>
            <UploadVideo />
            <UploadInfo title={this.state.title} description={this.state.description} handleChange={this.handleChange}/>
          </div>
          <UploadButtons />
        </form>
      </div>
    )
  }
}

export default UploadPage 
