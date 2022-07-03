import React from 'react';
import './VideoNav.scss'
import VideoNavItem from '../VideoNavItem/VideoNavItem';

const VideoNav = (props) => {

  return (
    <ul className="video-nav"> 
    <h3 className="video-nav__header">next videos</h3>
      {props.videos.map(video => {
          return (
          <VideoNavItem 
          key={video.id}
          id={video.id}
          title={video.title}
          image={video.image}
          channel={video.channel}
          onVideoSelect={props.onVideoSelect}
          />
          )
      })}
      </ul>
  );
};

export default VideoNav;
