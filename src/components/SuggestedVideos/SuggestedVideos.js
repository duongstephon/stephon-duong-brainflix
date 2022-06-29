import React from 'react';
import allVideos from '../../data/videos.json';
import './SuggestedVideos.scss'

const SuggestedVideos = (props) => {
    return (
      <div className="suggested-vids"> 
      <h4 className="suggested-vids__header">next videos</h4>
        {allVideos.map(video => {
            return (
            <article className="suggested-vids__section" key={video.id}>
            <img className="suggested-vids__image" src={video.image} />
              <div className="suggested-vids__info">
                <p className="suggested-vids__title">{video.title}</p>
                <p className="suggested-vids__channel">{video.channel}</p>
              </div>
            </article>
            )
        })}
        </div>
    );
};

export default SuggestedVideos;