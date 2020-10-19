import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import {OfferType} from "../../consts";

const App = (props) => {
  const {rentOfferAmount, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main rentOfferAmount = {rentOfferAmount}/>
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
  offers: PropTypes.arrayOf(PropTypes.shape({
    photos: PropTypes.array.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.oneOf([
      OfferType.APARTMENT, OfferType.HOUSE,
      OfferType.ROOM, OfferType.HOTEL]),
    rating: PropTypes.number.isRequired,
    bedroomCount: PropTypes.number.isRequired,
    guestCount: PropTypes.number.isRequired,
    rentPerNight: PropTypes.number.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired
};

export default App;
