import React from 'react';
import './Description.scss';
import viewsImg from '../../assets/icons/views.svg'
import likesImg from '../../assets/icons/likes.svg'

const Description = (props) => {
    const { title, channel, timestamp, views, likes, id, description } = props.current;

    const handleDate = (time) => {
        let date = new Date(time)
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();
        let fullDate = `${month}/${day}/${year}`
        return fullDate
    }

    return (
        <section className="description">
            <h1 className="description__title">{title}</h1>
            <div className="description__box">
                <div className='description__small-section'>
                    <h3 className="description__channel">By {channel}</h3>
                    <p className="description__date">{handleDate(timestamp)}</p>
                </div>
                <div className='description__small-section'>
                    <div className='description__views-likes-box'>
                        <img className="description__image" src={viewsImg} alt='views'/>
                        <p className="description__info">{views}</p>
                    </div>
                    <div className='description__views-likes-box'>
                        <img className="description__image" src={likesImg} alt='likes'/>
                        <p className="description__info">{likes}</p>
                    </div>
                </div>
            </div>
            <p className="description__description">{description}</p>
        </section>
    );
};

export default Description;