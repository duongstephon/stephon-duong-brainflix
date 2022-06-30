import './Comments.scss'
import React from 'react';
import avatarImage from '../../assets/images/Mohan-muruge.jpg'

const Comments = (props) => {
    return (
        <div className="comments">
            <img className="comments__image" src={avatarImage} alt="avatar"/>
            <div className="comments__box">
                <h4>join the conversation</h4>
                <textarea className="comments__input" type="text" rows="4" placeholder="Add a new comment"/>
                <button className="comments__button">comment</button>
            </div>
        </div>
    );
};

export default Comments;
