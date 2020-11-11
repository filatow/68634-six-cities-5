import leaflet from "leaflet";

export const getUniqueId = () => {
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
    .replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0; let v = c === `x` ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
};

export const getStarsActiveWidth = (rating) => {
  return (Math.round(rating) * 2 * 10);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const extractLatLngsFromOffers = (offers) => offers.map((offer) => {
  return leaflet.latLng(offer.coords);
});
