import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {Validation} from "../../validation";
import {getStarsActiveWidth} from "../../utils";

const PlaceCard = (props) => {
  const {
    cardExtraClass,
    imageWrapperExtraClass,
    infoExtraClass,
    offer,
    image,
    onMouseEnter,
    onMouseLeave
  } = props;

  const articleClassName = `place-card ${cardExtraClass}`;
  const imageWrapperClassName = `place-card__image-wrapper ${imageWrapperExtraClass}`;
  const infoClassName = `place-card__info ${infoExtraClass}`;


  const {id, photos, header, isPremium, type, rating, rentPerNight} = offer;
  const premiumMark = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
  const starsActiveWidth = getStarsActiveWidth(rating);
  return (
    <article
      className={articleClassName}
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} >

      {isPremium && premiumMark}

      <div className={imageWrapperClassName}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={photos[0]} width={image.width} height={image.height} alt="Place image"/>
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{rentPerNight}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${starsActiveWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/1">{header}</Link>
        </h2>
        <p className="place-card__type"> {type} </p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: Validation.OFFER,
  cardExtraClass: PropTypes.string,
  imageWrapperExtraClass: PropTypes.string,
  infoExtraClass: PropTypes.string,
  image: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

PlaceCard.defaultProps = {
  cardExtraClass: ``,
  imageWrapperExtraClass: ``,
  infoExtraClass: ``,
  image: {
    width: 260,
    height: 200
  },
  onMouseEnter: () => null,
  onMouseLeave: () => null
};

export default PlaceCard;
