import './VideoNavItem.scss'
import { Link } from 'react-router-dom';
import React from 'react';
import { api_url} from '../../utils'

//Individual next videos
const VideoNavItem = (video) => {
    const { id, image, title, channel } = video;

    return (
        <Link to={"/video/" + id} className="video-item" key={id}>
        <img className="video-item__image" src={api_url + image} alt={title}/>
        <div className="video-item__info">
            <p className="video-item__title">{title}</p>
            <p className="video-item__channel">{channel}</p>
        </div>
        </Link>
    );
};

export default VideoNavItem;
