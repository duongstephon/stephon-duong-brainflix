import React from 'react';

const VideoNavItem = (props) => {

    const handleNewVideoSelect = e => {
        e.preventDefault();
        props.onVideoSelect(props.id)
        
    }
    return (
        <li className="video-nav__section" onClick={handleNewVideoSelect} key={props.id}>
        <img className="video-nav__image" src={props.image} />
        <div className="video-nav__info">
            <p className="video-nav__title">{props.title}</p>
            <p className="video-nav__channel">{props.channel}</p>
        </div>
        </li>
    );
};

export default VideoNavItem;
