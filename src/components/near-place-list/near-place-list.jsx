import React from "react";
import PropTypes from "prop-types";

import {Validation} from "../../validation";
import NearPlaceCard from "../near-place-card/near-place-card";


const NearPlaces = ({offers}) => {
  const nearPlaces = offers.map((offer) => {
    return (
      <NearPlaceCard
        key = {offer.id}
        offer = {offer} />
    );
  });

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {nearPlaces}

      </div>
    </section>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired
};

export default NearPlaces;
