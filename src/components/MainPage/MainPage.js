import React from 'react';
import './MainPage.scss';
import videoDetailsData from '../../data/video-details.json';
import videosData from '../../data/videos.json';
import DisplayedVideo from '../DisplayedVideo/DisplayedVideo';
import Description from '../Description/Description';
import Comments from '../Comments/Comments'
import VideoNav from '../VideoNav/VideoNav';

class MainPage extends React.Component {
  state = {
      allVideos: videosData,
      currentVideo: videoDetailsData[0]
  }

  render() {
    const videoNavVideos = videosData.filter(video => video.id !== this.state.currentVideo)
    
      return (
        <div>
          <DisplayedVideo current={this.state.currentVideo}/>
          <section>
            <div>
              <Description current={this.state.currentVideo}/>
            </div>
            <VideoNav videos={this.state.allVideos} />
          </section>
        </div>
      );
  };
}

export default MainPage;