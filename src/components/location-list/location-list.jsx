import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

import {Validation} from "../../validation";


const LocationList = (props) => {
  const {
    cities,
    currentCity,
    offers,
    changeCity,
    setOffers,
    setMarkersLatLngs
  } = props;

  const locations = cities.map((city, ind) => {
    const active = (currentCity === city) ? `tabs__item--active` : ``;
    return (
      <li
        className="locations__item"
        key={ind}
        onClick={() => {
          changeCity(city);
          const newOffers = offers.slice();
          const shiftedOffer = newOffers.shift();
          newOffers.push(shiftedOffer);
          setOffers(newOffers);
          setMarkersLatLngs(newOffers);
        }}
      >
        <a className={`locations__item-link tabs__item ${active}`} href="#">
          <span>{city}</span>
        </a>
      </li>
    );
  });

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations}
      </ul>
    </section>
  );
};

LocationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired,
  changeCity: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
  setMarkersLatLngs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },

  setOffers(offers) {
    dispatch(ActionCreator.setOffers(offers));
  },

  setMarkersLatLngs(offers) {
    dispatch(ActionCreator.setMarkersLatLngs(offers));
  },
});


export {LocationList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationList);

