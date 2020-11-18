import React from "react";
import {} from "react-redux";
import PropTypes from "prop-types";

import {connect} from "react-redux";
// import {ActionCreator} from "../../store/action";

import {Link} from "react-router-dom";
import {Validation} from "../../validation";

import CityPlaceList from "../city-place-list/city-place-list";
import Map from "../map/map";
import LocationList from "../location-list/location-list";

// import offers from "../../mocks/offers";
import {AMSTERDAM_COORDS} from "../../consts";

const Main = (props) => {
  const {
    cityOffers,
    // mapOffers,
    cities,
    currentCity
  } = props;
  const offerAmount = cityOffers.length;

  return (
    <div className="page page--gray page--main">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">

          <LocationList
            cities = {cities} />

        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerAmount} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* <!--
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                --> */}
              </form>
              <CityPlaceList
                cityOffers = {cityOffers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={AMSTERDAM_COORDS} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  cityOffers: PropTypes.arrayOf(Validation.OFFER).isRequired,
  // mapOffers: PropTypes.arrayOf(Validation.OFFER).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  cityOffers: state.cityOffers,
  // mapOffers: state.mapOffers
});

// const mapDispatchToProps = (dispatch) => ({
//   setCityOffers(cityOffers) {
//     dispatch(ActionCreator.setCityOffers(cityOffers));
//   },

//   setMapOffers(mapOffers) {
//     dispatch(ActionCreator.setCityOffers(mapOffers));
//   }
// });

export {Main};
export default connect(mapStateToProps)(Main);
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
