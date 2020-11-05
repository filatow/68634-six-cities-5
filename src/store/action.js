export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreater = {
  CHANGE_CITY(city) {
    return {
      type: `CHANGE_CITY`,
      city
    };
  },
  GET_OFFERS(offers) {
    return {
      type: `GET_OFFERS`,
      offers
    };
  }
};
