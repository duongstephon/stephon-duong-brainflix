import React from 'react';
import './CommentsItem.scss'
import Mercury from '../../assets/images/mercury.jpg'

const CommentsItem = (props) => {

  return (
    <article className="posted-comments">
      <img className="posted-comments__image" src={Mercury} alt='avatar'/>
        <div className="posted-comments__posted">
          <div className="posted-comments__title-date">
            <p>{props.name}</p>
            <p>{props.handleDate(props.timestamp)}</p>
          </div>
          <p>{props.comment}</p>
        </div>

        
    </article>
  );
};

export default CommentsItem;
