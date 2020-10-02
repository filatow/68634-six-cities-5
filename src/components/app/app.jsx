import React from "react";
import Page from "../page/page";

const App = (props) => {
  const {rentOfferAmount} = props;


  return (
    <Page rentOfferAmount = {rentOfferAmount}/>
  );
};


export default App;
