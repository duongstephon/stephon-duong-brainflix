import React from 'react';
import './Description.scss';

// Information of the video, including the title, channel likes and views
const Description = (props) => {
  const { title, channel, timestamp, views, likes, description } = props.current;

  return (
    <section className="description">
      <h1 className="description__title">{title}</h1>
      <div className="description__box">
        <div className='description__small-section'>
          <p className="description__channel">By {channel}</p>
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
