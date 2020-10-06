import React from "react";
import PropTypes from "prop-types";
import Page from "../page/page";

const App = (props) => {
  const {rentOfferAmount} = props;

  return (
    <Page rentOfferAmount = {rentOfferAmount}/>
  );
};

App.propTypes = {
  rentOfferAmount: PropTypes.number.isRequired
};

export default App;
