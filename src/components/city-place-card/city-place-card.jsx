import React from "react";
// import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {Validation} from "../../validation";
// import {CardType} from "../../consts";

import PlaceCard from "../place-card/place-card";

const CityPlaceCard = ({offer, onMouseEnter}) => {
  return (
    <PlaceCard
      cardExtraClass={`cities__place-card`}
      imageWrapperExtraClass={`cities__image-wrapper`}
      offer={offer}
      // onMouseEnter={onMouseEnter} />
      onMouseEnter={() => onMouseEnter(offer.id)} />

  );
};

CityPlaceCard.propTypes = {
  offer: Validation.OFFER,
  onMouseEnter: PropTypes.func.isRequired
};

export default CityPlaceCard;
