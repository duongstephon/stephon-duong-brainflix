import './Comments.scss'
import React from 'react';
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import CommentsItem from '../CommentsItem/CommentsItem';

const Comments = (props) => {
  return (
    <div className="comments">
    <h3 className='comments__total-comments'>{props.current.comments.length} Comments</h3>
      <article className="comments__input-section">
        <img className="comments__image" src={avatarImage} alt="avatar"/>
        <div className="comments__box">
          <div className="comments__tablet-input-display">
            <h3 className="comments__header">join the conversation</h3>
            <textarea className="comments__input" type="text" placeholder="Add a new comment"/>
          </div>
          <button className="comments__button">comment</button>
        </div>
      </article>
      {props.current.comments.map(singleComment => {
        return (
          <CommentsItem 
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
