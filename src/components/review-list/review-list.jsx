import React from "react";
import PropTypes from "prop-types";

import NewCommentForm from "../new-comment-form/new-comment-form";
import {Validation} from "../../validation";
import Review from "../review/review";

const ReviewList = ({reviews}) => {
  const propertyReviews = reviews.map((reviewData) => (
    <Review
      data={reviewData}
      key={reviewData.id} />
  ));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {propertyReviews}
      </ul>
      <NewCommentForm />
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(Validation.REVIEW).isRequired
};

export default ReviewList;
