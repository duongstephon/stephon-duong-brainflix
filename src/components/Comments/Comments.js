import './Comments.scss'
import React from 'react';
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import CommentsItem from '../CommentsItem/CommentsItem';

// Comment section of the website
const Comments = (props) => {

  return (
    <div className="comments">
    <h3 className='comments__total-comments'>{props.comments?.length} Comments</h3>
      <article className="comments__input-section">
        <img className="comments__image" src={avatarImage} alt="avatar"/>
        <div className="comments__box">
          <div className="comments__tablet-input-display">
            <label className="comments__header">join the conversation</label>
            <textarea className="comments__input" type="text" placeholder="Add a new comment"/>
          </div>
          <button className="comments__button">comment</button>
        </div>
      </article>
      {props.comments?.map(singleComment => {
        return (
          <CommentsItem
          key={singleComment.name} 
          name={singleComment.name}
          comment={singleComment.comment}
          timestamp={singleComment.timestamp}
          handleDate={props.handleDate}
          />
        )
      })}
    </div>
  );
};

export default Comments;
