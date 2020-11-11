import React, {PureComponent, Fragment} from "react";
import {Grade} from "../../consts";


export default class NewCommentForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      rating: ``,
      review: ``
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFieldChange = this._handleFieldChange.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  _handleFieldChange(event) {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const ratingRadioGroup = Object.values(Grade).map((grade, ind, arr) => {
      return (
        <Fragment
          key={grade}>
          <input
            className="form__rating-input visually-hidden"
            name="rating" id={`${arr.length - ind}-stars`} type="radio"
            value={arr.length - ind}
            onChange={this._handleFieldChange}
            checked={this.state.rating === String(arr.length - ind)}/>
          <label htmlFor={`${arr.length - ind}-stars`} className="reviews__rating-label form__rating-label" title={grade}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      );
    });
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingRadioGroup}
        </div>
        <textarea
          className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={this._handleFieldChange}
          value={this.state.review}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}
