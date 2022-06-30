import React from 'react';
import './Description.scss';
import viewsImg from '../../assets/icons/views.svg'
import likesImg from '../../assets/icons/likes.svg'

const Description = (props) => {
  const { title, channel, timestamp, views, likes, id, description } = props.current;

  return (
    <section className="description" id={id}>
      <h1 className="description__title">{title}</h1>
      <div className="description__box">
        <div className='description__small-section'>
          <h3 className="description__channel">By {channel}</h3>
          <p className="description__date">{props.handleDate(timestamp)}</p>
        </div>
        <div className='description__small-section'>
          <p className="description__views">{views}</p>
          <p className="description__likes">{likes}</p>
        </div>
      </div>
      <p className="description__description">{description}</p>
    </section>
  );
};

export default Description;
