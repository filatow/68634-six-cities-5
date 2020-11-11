import {extend, extractLatLngsFromOffers} from "../utils";
import {ActionType} from "./action";

import offers from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offers,
  markersLatLngs: extractLatLngsFromOffers(offers)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.city
      });
    case ActionType.SET_OFFERS:
      return extend(state, {
        offers: action.offers
      });
    case ActionType.SET_MARKERS_LATLNGS:
      return extend(state, {
        markersLatLngs: action.markersLatLngs
      });
    default:
      return state;
  }
};

export {reducer};
