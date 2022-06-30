import React from 'react';
import './MainPage.scss';
import videoDetailsData from '../../data/video-details.json';
import videosData from '../../data/videos.json';
import DisplayedVideo from '../DisplayedVideo/DisplayedVideo';
import Description from '../Description/Description';
import Comments from '../Comments/Comments'
import VideoNav from '../VideoNav/VideoNav';

// const filteredVideos = 
class MainPage extends React.Component {
  state = {
      allVideos: videosData,
      currentVideo: videoDetailsData[0]
  }

  handleVideoSelect = id => {
    this.setState({
      currentVideo: videoDetailsData.find(video => video.id === id)
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
    const filteredVideos = videosData.filter(video => video.id !== this.state.currentVideo.id)
    
      return (
        <div>
          <DisplayedVideo current={this.state.currentVideo}/>
          <section>
            <div>
              <Description current={this.state.currentVideo} handleDate={this.handleDate}/>
              <Comments current={this.state.currentVideo} handleDate={this.handleDate}/>
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

export default MainPage;
