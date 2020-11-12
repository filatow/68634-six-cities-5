import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import {Validation} from "../../validation";

import Map from "../map/map";
import ReviewList from "../review-list/review-list";
import NearPlaces from '../near-place-list/near-place-list';

import {AMSTERDAM_COORDS} from "../../consts";

const Property = (props) => {
  const {offer, neighbourOffers, setMarkersLatLngs} = props;
  const {
    photos, header, isPremium, type, bedroomCount, rating, guestCount,
    rentPerNight, amenities, host, description, reviews} = offer;
  const photoGallery = photos.map((photo) => {
    return (
      <div
        className="property__image-wrapper"
        key={photo}>
        <img className="property__image" src={photo} alt="Photo studio"/>
      </div>
    );
  });
  const premiumMark = (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );
  const starsActiveWidth = Math.round(rating) * 2 * 10;
  const placeAmenities = amenities.map((amenity) => {
    return (
      <li
        className="property__inside-item"
        key={amenity} >
        {amenity}
      </li>
    );
  });
  const superHostClass = host.isSuper ? `property__avatar-wrapper--pro` : ``;
  setMarkersLatLngs(neighbourOffers);


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
              {/* <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a> */}
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photoGallery}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? premiumMark : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {header}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${starsActiveWidth}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guestCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{rentPerNight}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {placeAmenities}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${superHostClass} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <ReviewList
                reviews={reviews} />

            </div>
          </div>
          <section className="property__map map">
            <Map
              city={AMSTERDAM_COORDS} />
          </section>
        </section>
        <div className="container">
          <NearPlaces
            offers={neighbourOffers} />
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  offer: Validation.OFFER,
  neighbourOffers: PropTypes.arrayOf(Validation.OFFER),
  setMarkersLatLngs: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setMarkersLatLngs(offers) {
    dispatch(ActionCreator.setMarkersLatLngs(offers));
  },
});

export {Property};
export default connect(null, mapDispatchToProps)(Property);
