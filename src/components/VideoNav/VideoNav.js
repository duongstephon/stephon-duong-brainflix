import React from 'react';
import allVideos from '../../data/videos.json';
import './VideoNav.scss'

const SuggestedVideos = (props) => {

  const handleVideoSelect = e => {
    e.preventDefault();
    props.onVideoSelect(props.otherVidoes.id)
    }
  return (
    <div className="video-nav"> 
    <h4 className="video-nav__header">next videos</h4>
      {allVideos.map(video => {
          return (
          <article className="video-nav__section" key={video.id}>
          <img className="video-nav__image" src={video.image} />
            <div className="video-nav__info">
              <p className="video-nav__title">{video.title}</p>
              <p className="video-nav__channel">{video.channel}</p>
            </div>
          </article>
          )
      })}
      </div>
  );
};

export default SuggestedVideos;