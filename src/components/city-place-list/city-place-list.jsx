import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CityPlaceCard from "../city-place-card/city-place-card";

import {Validation} from "../../validation";

export default class CityPlaceList extends PureComponent {
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
    const places = offers.map((offer) => {
      return (
        <CityPlaceCard
          key = {offer.id}
          offer = {offer}
          onMouseEnter = {this._handleCardMouseEnter} />
      );
    });

    return (
      <div className="cities__places-list places__list tabs__content">
        {places}
      </div>
    );
  }
}

CityPlaceList.propTypes = {
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired
};
