import React from 'react';
import './CommentsItem.scss'
import Mercury from '../../assets/images/mercury.jpg'

//Individual posted comments within the comment section
const CommentsItem = (props) => {
  const { name, timestamp, comment } = props;

  return (
    <article className="posted-comments">
      <img className="posted-comments__image" src={Mercury} alt='avatar'/>
        <div className="posted-comments__posted">
          <div className="posted-comments__name-date">
            <p className="posted-comments__name">{name}</p>
            <p className="posted-comments__date">{props.handleDate(timestamp)}</p>
          </div>
          <p className="posted-comments__comment">{comment}</p>
        </div>
    </article>
  );
};

export default CommentsItem;
