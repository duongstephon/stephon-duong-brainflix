import React from 'react';
import './HomePage.scss';
import DisplayedVideo from '../../components/DisplayedVideo/DisplayedVideo';
import Description from '../../components/Description/Description';
import Comments from '../../components/Comments/Comments'
import VideoNav from '../../components/VideoNav/VideoNav';
import axios from 'axios';
import { api_url, api_key } from '../../utils';

class HomePage extends React.Component {
  state = {
      allVideos: [],
      currentVideo: {}
  }

  getVideo = (id) => {
    axios.get(`${api_url}videos/${id}/?api_key=${api_key}`)
      .then((response) => {
        this.setState({
          currentVideo: response.data
        });
      });
    }
  
  componentDidMount() {
    axios.get(`${api_url}videos/?api_key=${api_key}`)
      .then(response => {
        this.setState({
          allVideos: response.data
        });

        const videoIdToGet = this.props.match.params.videoId || response.data[0].id;
        this.getVideo(videoIdToGet)
        });
  }

  handleVideoSelect = id => {
    this.setState({
      currentVideo: this.state.allVideos.find(video => video.id === id)
    })
  }

  handleDate = (time) => {
    let date = new Date(time)
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let fullDate = `${month}/${day}/${year}`
    return fullDate
}

  render() {
    const filteredVideos = this.state.allVideos.filter(video => video.id !== this.state.currentVideo.id)
    
      return (
        <div>
          <DisplayedVideo current={this.state.currentVideo}/>
          <section className="home-page">
            <div className="home-page__info-comments">
              <Description current={this.state.currentVideo} handleDate={this.handleDate}/>
              {/* <Comments current={this.state.currentVideo} handleDate={this.handleDate} /> */}
            </div>
            <VideoNav 
              current={this.state.currentVideo}
              videos={filteredVideos} 
              onVideoSelect={this.handleVideoSelect}
              />
          </section>
        </div>
      );
  };
}

export default HomePage;
