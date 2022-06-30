import './Comments.scss'
import React from 'react';
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import CommentsItem from '../CommentsItem/CommentsItem';

const Comments = (props) => {
  return (
    <div className="comments">
      <article>
        <img className="comments__image" src={avatarImage} alt="avatar"/>
        <div className="comments__box">
          <h4>join the conversation</h4>
          <textarea className="comments__input" type="text" rows="4" placeholder="Add a new comment"/>
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
