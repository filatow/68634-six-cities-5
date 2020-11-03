import React from "react";
import {Validation} from "../../validation";


const Review = ({data}) => {
  const {key, avatar, author, rating, time, text} = data;
  return (
    <li
      className="reviews__item"
      key={key}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 2 * 10}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{time}</time>
      </div>
    </li>
  );
};


Review.propTypes = {
  data: Validation.REVIEW
};

export default Review;
