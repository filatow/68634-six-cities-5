export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFERS: `SET_OFFERS`,
};

export const ActionCreater = {
  CHANGE_CITY(city) {
    return {
      type: `CHANGE_CITY`,
      city
    };
  },
  SET_OFFERS(offers) {
    return {
      type: `SET_OFFERS`,
      offers
    };
  }
};
