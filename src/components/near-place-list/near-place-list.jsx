import React from "react";
import PropTypes from "prop-types";

import withActiveCard from "../../hocs/with-active-card/with-active-card";
import {Validation} from "../../validation";

import NearPlaceCard from "../near-place-card/near-place-card";


const NearPlaceList = (props) => {
  const {
    offer,
    neighbours,
    setActiveCardId
  } = props;
  const nearPlaces = neighbours.map((neighbour) => {
    return (
      <NearPlaceCard
        key={neighbour.id}
        offer={neighbour}
      />
    );
  });
  setActiveCardId(offer.id);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {nearPlaces}

      </div>
    </section>
  );
};

NearPlaceList.propTypes = {
  offer: Validation.OFFER,
  neighbours: PropTypes.arrayOf(Validation.OFFER).isRequired,
  setActiveCardId: PropTypes.func.isRequired
};

export default withActiveCard(NearPlaceList);
