import React, {PureComponent} from "react";

import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const withActiveMarkerActions = (Component) => {
  class WithActiveMarkerActions extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Component
          {...this.props}
        />
      );
    }

  }

  WithActiveMarkerActions.propTypes = {
    setActiveMarkerOfferId: PropTypes.func.isRequired,
    resetActiveMarkerOfferId: PropTypes.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    setActiveMarkerOfferId(id) {
      dispatch(ActionCreator.setActiveMarkerOfferId(id));
    },
    resetActiveMarkerOfferId() {
      dispatch(ActionCreator.resetActiveMarkerOfferId());
    },
  });

  return connect(null, mapDispatchToProps)(WithActiveMarkerActions);
};

export default withActiveMarkerActions;
