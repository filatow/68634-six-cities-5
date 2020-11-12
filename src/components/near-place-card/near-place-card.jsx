import React from "react";
// import PropTypes from "prop-types";

import {Validation} from "../../validation";

import PlaceCard from "../place-card/place-card";


const NearPlaceCard = ({offer}) => {
  return (
    <PlaceCard
      cardExtraClass={`near-places__card`}
      imageWrapperExtraClass={`near-places__image-wrapper`}
      offer={offer} />
  );
};

NearPlaceCard.propTypes = {
  offer: Validation.OFFER
};

export default NearPlaceCard;
