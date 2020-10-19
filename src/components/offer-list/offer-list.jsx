import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

// import {OfferType} from "../../consts";
// import {getUniqueId} from "../../utils";
import {Validation} from "../../validation";

export default class OfferList extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      activeCard: props.offers[0].id
    };

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
  }

  _handleCardMouseEnter(event) {
    const currentCard = event.target.closest(`.place-card`);
    if (this.state.activeCard !== currentCard) {
      this.setState({
        activeCard: event.target.closest(`.place-card`).id
      });
    }
  }

  render() {
    const {offers} = this.props;

    const placesList = offers.map((offer) => {
      return (
        <OfferCard
          key = {offer.id}
          offer = {offer}
          handleCardMouseEnter = {this._handleCardMouseEnter} />
      );
    });

    return (
      <div className="cities__places-list places__list tabs__content">
        {placesList}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired
};
