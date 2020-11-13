import React from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {Validation} from "../../validation";

const CityPlaceList = (props) => {
  const {offers, activeCardId, setActiveCardId} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => {
          return (
            <CityPlaceCard
              key = {offer.id}
              offer = {offer}
              isActive = {offer.id === activeCardId}
              onMouseEnter = {setActiveCardId} />
          );
        })
      }
    </div>
  );
};

CityPlaceList.propTypes = {
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired,
  activeCardId: PropTypes.string.isRequired,
  setActiveCardId: PropTypes.func.isRequired
};

export default withActiveCard(CityPlaceList);
