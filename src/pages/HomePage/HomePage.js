import React from 'react';
import './HomePage.scss';
import videoDetailsData from '../../data/video-details.json';
import videosData from '../../data/videos.json';
import DisplayedVideo from '../../components/DisplayedVideo/DisplayedVideo';
import Description from '../../components/Description/Description';
import Comments from '../../components/Comments/Comments'
import VideoNav from '../../components/VideoNav/VideoNav';

// const filteredVideos = 
class HomePage extends React.Component {
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
          <section className="home-page">
            <div className="home-page__info-comments">
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

export default HomePage;
