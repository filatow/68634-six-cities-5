import {extractLatLngsFromOffers} from "../utils";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_CITY_OFFERS: `SET_CITY_OFFERS`,
  SET_MAP_OFFERS: `SET_MAP_OFFERS`,
  SET_MARKERS_LATLNGS: `SET_MARKERS_LATLNGS`,
  SET_ACTIVE_MARKER_OFFER_ID: `SET_ACTIVE_MARKER_OFFER_ID`,
  RESET_ACTIVE_MARKER_OFFER_ID: `RESET_ACTIVE_MARKER_OFFER_ID`
};

export const ActionCreator = {
  changeCity(city) {
    return {
      type: `CHANGE_CITY`,
      city,
    };
  },
  setCityOffers(cityOffers) {
    return {
      type: `SET_CITY_OFFERS`,
      cityOffers
    };
  },
  setMapOffers(mapOffers) {
    return {
      type: `SET_MAP_OFFERS`,
      mapOffers
    };
  },
  setMarkersLatLngs(offers) {
    return {
      type: `SET_MARKERS_LATLNGS`,
      markersLatLngs: extractLatLngsFromOffers(offers)
    };
  },
  setActiveMarkerOfferId(id) {
    return {
      type: `SET_ACTIVE_MARKER_OFFER_ID`,
      activeMarkerOfferId: id
    };
  },
  resetActiveMarkerOfferId() {
    return {
      type: `RESET_ACTIVE_MARKER_OFFER_ID`,
      activeMarkerOfferId: ``
    };
  }
};
