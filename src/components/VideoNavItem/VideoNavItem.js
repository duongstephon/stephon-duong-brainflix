import './VideoNavItem.scss'

import React from 'react';

const VideoNavItem = (props) => {

    const handleNewVideoSelect = e => {
        e.preventDefault();
        props.onVideoSelect(props.id)
        
    }
    return (
        <li className="video-item" onClick={handleNewVideoSelect} key={props.id}>
        <img className="video-item__image" src={props.image} alt="video thumbnail"/>
        <div className="video-item__info">
            <p className="video-item__title">{props.title}</p>
            <p className="video-item__channel">{props.channel}</p>
        </div>
        </li>
    );
};

export default VideoNavItem;
