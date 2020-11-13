import React, {PureComponent} from "react";

// import PropTypes from "prop-types";
// import {Validation} from "../../validation";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: ``
      };

      this.setActiveCardId = this.setActiveCardId.bind(this);
    }

    setActiveCardId(id) {
      if (this.state.activeCardId !== id) {
        this.setState({
          activeCardId: id
        }
        , () => console.log(`activeCardId ::`, this.state.activeCardId)
        );
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          activeCardId={this.state.activeCardId}
          setActiveCardId={this.setActiveCardId} />
      );
    }

  }

  // WithActiveCard.propTypes = {

  // };

  return WithActiveCard;
};

export default withActiveCard;
