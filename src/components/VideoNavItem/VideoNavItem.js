import './VideoNavItem.scss'
import { Link } from 'react-router-dom';
import React from 'react';

const VideoNavItem = (video) => {

    return (
        <Link to={"/video/" + video.id} className="video-item" key={video.id}>
        <img className="video-item__image" src={video.image} alt=""/>
        <div className="video-item__info">
            <p className="video-item__title">{video.title}</p>
            <p className="video-item__channel">{video.channel}</p>
        </div>
        </Link>
    );
};

export default VideoNavItem;
