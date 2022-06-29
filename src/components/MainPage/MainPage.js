import React from 'react';
import './MainPage.scss';
import videoDetails from '../../data/video-details.json';
import allVideos from '../../data/videos.json';
import DisplayedVideo from '../DisplayedVideo/DisplayedVideo';
import Comments from '../Comments/Comments'
import SuggestedVideos from '../SuggestedVideos/SuggestedVideos';

class MainPage extends React.Component {
  state = {
      otherVideos: allVideos,
      currentVideo: videoDetails[0]
  }

  render() {
    console.log(this.state.currentVideo)
      return (
        <div>
          <DisplayedVideo current={this.state.currentVideo}/>
          <SuggestedVideos videos={this.state.otherVideos} />
        </div>
      );
  };
}

export default MainPage;