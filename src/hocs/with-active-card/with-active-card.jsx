import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {Validation} from "../../validation";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: props.offers[0].id
      };

      this.setActiveCard = this.setActiveCard.bind(this);
    }

    setActiveCard(id) {
      if (this.state.activeCardId !== id) {
        this.setState({
          activeCardId: id
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          activeCardId={this.state.activeCardId}
          onMouseEnter={this.setActiveCard} />
      );
    }

  }

  WithActiveCard.propTypes = {
    offers: PropTypes.arrayOf(Validation.OFFER).isRequired
  };

  return WithActiveCard;
};

export default withActiveCard;
