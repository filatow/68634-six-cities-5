import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENT_OFFER_AMOUNT: 312,
};

ReactDOM.render(
    <App rentOfferAmount = {Settings.RENT_OFFER_AMOUNT}/>,
    document.querySelector(`#root`)
);
