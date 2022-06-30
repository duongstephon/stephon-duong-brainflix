import React from 'react';
import './CommentsItem.scss'
import Mercury from '../../assets/images/mercury.jpg'

const CommentsItem = (props) => {

  return (
    <article className="comments__section">
      <img className="comments__image comments__image--posted" src={Mercury} alt='avatar'/>
        <div className="comments__posted">
          <div className="comments__title-date">
            <p>{props.name}</p>
            <p>{props.handleDate(props.timestamp)}</p>
          </div>
          <p>{props.comment}</p>
        </div>

        
    </article>
  );
};

export default CommentsItem;
