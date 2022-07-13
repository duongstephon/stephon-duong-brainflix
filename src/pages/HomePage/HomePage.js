import React from 'react';
import './HomePage.scss';
import DisplayedVideo from '../../components/DisplayedVideo/DisplayedVideo';
import Description from '../../components/Description/Description';
import Comments from '../../components/Comments/Comments'
import VideoNav from '../../components/VideoNav/VideoNav';
import axios from 'axios';
import { api_url } from '../../utils';

class HomePage extends React.Component {
  state = {
      allVideos: [],
      currentVideo: {}
  }

  getVideo = (id) => {
    axios.get(`${api_url}/videos/${id}`)
      .then((response) => {
        this.setState({
          currentVideo: response.data
        });
      });
    }
  
  componentDidMount() {
    axios.get(`${api_url}/videos`)
      .then(response => {
        this.setState({
          allVideos: response.data
        });

        const videoIdToGet = this.props.match.params.videoId || response.data[0].id;
        this.getVideo(videoIdToGet)
        });
  }

  componentDidUpdate(prevProps) {
    const prevVideoId = prevProps.match.params.videoId
    const currentVideoId = this.props.match.params.videoId

    const videoIdToGet = currentVideoId || this.state.allVideos[0].id;

    if (prevVideoId !== currentVideoId) {
      this.getVideo(videoIdToGet)
    }
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
              <Comments comments={this.state.currentVideo.comments} handleDate={this.handleDate} />
            </div>
            <VideoNav 
              current={this.state.currentVideo}
              videos={filteredVideos} 
              />
          </section>
        </div>
      );
  };
}

export default HomePage;
