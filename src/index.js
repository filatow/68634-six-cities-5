import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import offers from "./mocks/offers";


const Settings = {
  RENT_OFFER_AMOUNT: 312,
};

ReactDOM.render(
    <App
      rentOfferAmount = {Settings.RENT_OFFER_AMOUNT}
      offers = {offers} />,
    document.querySelector(`#root`)
);
