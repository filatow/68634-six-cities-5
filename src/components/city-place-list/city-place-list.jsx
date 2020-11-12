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

    this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
  }

  handleCardMouseEnter(id) {
    if (this.state.activeCard !== id) {
      this.setState({
        activeCard: id
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
          onMouseEnter = {this.handleCardMouseEnter} />
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
