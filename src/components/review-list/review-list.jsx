import React from "react";
import NewCommentForm from "../new-comment-form/new-comment-form";
import {getUniqueId} from "../../utils";
import {Validation} from "../../validation";


const ReviewList = (props) => {
  const {reviews} = props;
  const placeReviews = reviews.map((review) => {
    const {avatar, author, rating, time, text} = review;
    return (
      <li
        className="reviews__item"
        key={getUniqueId()}>
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
  });

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {placeReviews}
      </ul>
      <NewCommentForm />
    </section>
  );
};

ReviewList.propTypes = {
  reviews: Validation.OFFER.reviews
};

export default ReviewList;
