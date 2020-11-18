import React from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {Validation} from "../../validation";

const CityPlaceList = (props) => {
  const {
    cityOffers,
    setActiveMarkerOfferId,
    resetActiveMarkerOfferId
  } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cityOffers.map((offer) => {
          return (
            <CityPlaceCard
              key = {offer.id}
              offer = {offer}
              onMouseEnter = {setActiveMarkerOfferId}
              onMouseLeave = {resetActiveMarkerOfferId} />
          );
        })
      }
    </div>
  );
};

CityPlaceList.propTypes = {
  cityOffers: PropTypes.arrayOf(Validation.OFFER).isRequired,
  setActiveMarkerOfferId: PropTypes.func.isRequired,
  resetActiveMarkerOfferId: PropTypes.func.isRequired
};

export default withActiveCard(CityPlaceList);
