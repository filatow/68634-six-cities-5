import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

// import {Validation} from "../../validation";
import {Validation} from "../../validation";

const App = (props) => {
  const {rentOfferAmount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            rentOfferAmount = {rentOfferAmount}
            offers = {offers} />
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/offer/:id">
          <Room/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentOfferAmount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired
};

export default App;
