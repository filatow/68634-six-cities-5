import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Property from "../property/property";

import {Validation} from "../../validation";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            offers = {offers} />
        </Route>
        {/* <Route exact
          path="/"
          render={({history}) => (
            <Main
              onCardClick ={() => history.push(`/offer/1`)}
              offers = {offers} />
          )} /> */}
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites
            offers={offers}/>
        </Route>
        <Route exact path="/offer/:id">
          <Property
            offer={offers[0]}
            neighbourOffers={offers.slice(1)} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(Validation.OFFER).isRequired
};

export default App;
