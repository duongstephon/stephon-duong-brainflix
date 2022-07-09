import React from 'react';
import './CommentsItem.scss'
import Mercury from '../../assets/images/mercury.jpg'

const CommentsItem = (props) => {

  return (
    <article className="posted-comments">
      <img className="posted-comments__image" src={Mercury} alt='avatar'/>
        <div className="posted-comments__posted">
          <div className="posted-comments__name-date">
            <p className="posted-comments__name">{props.name}</p>
            <p className="posted-comments__date">{props.handleDate(props.timestamp)}</p>
          </div>
          <p className="posted-comments__comment">{props.comment}</p>
        </div>
    </article>
  );
};

export default CommentsItem;
