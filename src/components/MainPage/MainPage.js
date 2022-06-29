import React from 'react';
import './MainPage.scss';
import videoDetails from '../../data/video-details.json';
import allVideos from '../../data/videos.json';
import Video from '../Video/Video';
import Comments from '../Comments/Comments'
import SuggestedVideos from '../SuggestedVideos/SuggestedVideos';

class MainPage extends React.Component {
  state = {
      currentVideo: {allVideos},
      otherVideos: {videoDetails}
  }

  render() {
    console.log(this.state.videos)
      return (
        <div>
          <SuggestedVideos videos={this.state.videos} />
        </div>
      );
  };
}

export default MainPage;