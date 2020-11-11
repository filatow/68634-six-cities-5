import {extractLatLngsFromOffers} from "../utils";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_MARKERS_LATLNGS: `SET_MARKERS_LATLNGS`,
};

export const ActionCreator = {
  changeCity(city) {
    return {
      type: `CHANGE_CITY`,
      city,
    };
  },
  setOffers(offers) {
    return {
      type: `SET_OFFERS`,
      offers
    };
  },
  setMarkersLatLngs(offers) {
    return {
      type: `SET_MARKERS_LATLNGS`,
      markersLatLngs: extractLatLngsFromOffers(offers)
    };
  },
};
