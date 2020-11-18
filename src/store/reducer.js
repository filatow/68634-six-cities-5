import {extend, extractLatLngsFromOffers} from "../utils";
import {ActionType} from "./action";

import offers from "../mocks/offers";

const initialState = {
  city: `Paris`,
  cityOffers: offers,
  mapOffers: offers,
  markersLatLngs: extractLatLngsFromOffers(offers),
  activeMarkerOfferId: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.city
      });
    case ActionType.SET_CITY_OFFERS:
      return extend(state, {
        cityOffers: action.cityOffers
      });
    case ActionType.SET_MAP_OFFERS:
      return extend(state, {
        mapOffers: action.mapOffers
      });
    case ActionType.SET_MARKERS_LATLNGS:
      return extend(state, {
        markersLatLngs: action.markersLatLngs
      });
    case ActionType.SET_ACTIVE_MARKER_OFFER_ID:
      return extend(state, {
        activeMarkerOfferId: action.activeMarkerOfferId
      });
    case ActionType.RESET_ACTIVE_MARKER_OFFER_ID:
      return extend(state, {
        activeMarkerOfferId: action.activeMarkerOfferId
      });
    default:
      return state;
  }
};

export {reducer};
