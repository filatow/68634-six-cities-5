import React, {Fragment, createRef} from "react";
import {Grade} from "../../consts";

import PropTypes from "prop-types";

import withControlledFilds from "../../hocs/with-controlled-fields/with-controlled-fields";

const NewCommentForm = (props) => {
  const {rating, review, onChange, onSubmit} = props;
  const formRef = createRef();

  const ratingRadioGroup = Object.values(Grade).map((grade, ind, arr) => {
    return (
      <Fragment
        key={grade}>
        <input
          className="form__rating-input visually-hidden"
          name="rating" id={`${arr.length - ind}-stars`} type="radio"
          value={arr.length - ind}
          onChange={onChange}
          checked={rating === String(arr.length - ind)}/>
        <label htmlFor={`${arr.length - ind}-stars`} className="reviews__rating-label form__rating-label" title={grade}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  });

  return (
    <form
      ref={formRef}
      className="reviews__form form" action="#" method="post"
      // onSubmit={() => onSubmit(formRef)}>
      onSubmit={(event) => onSubmit(event, formRef)}>

      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingRadioGroup}
      </div>
      <textarea
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={onChange}
        value={review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};


NewCommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withControlledFilds(NewCommentForm);
