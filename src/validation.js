import PropTypes from "prop-types";
import {OfferType} from "./consts";

export const Validation = {
  OFFER: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
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
  }).isRequired
};
