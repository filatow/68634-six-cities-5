import React from "react";
import PropTypes from "prop-types";

import {Validation} from "../../validation";

import PlaceCard from "../place-card/place-card";

const CityPlaceCard = (props) => {
  const {
    offer,
    onMouseEnter,
    onMouseLeave
  } = props;

  return (
    <PlaceCard
      cardExtraClass={`cities__place-card`}
      imageWrapperExtraClass={`cities__image-wrapper`}
      offer={offer}
      onMouseEnter={() => onMouseEnter(offer.id)}
      onMouseLeave={onMouseLeave} />

  );
};

CityPlaceCard.propTypes = {
  offer: Validation.OFFER,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default CityPlaceCard;
