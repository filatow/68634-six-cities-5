import React from "react";
import PropTypes from "prop-types";


const LocationList = (props) => {
  const {cities} = props;
  const locations = cities.map((city, ind) => {
    return (
      <li className="locations__item" key={ind}>
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>
    );
  });

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations}
      </ul>
    </section>
  );
};

LocationList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default LocationList;
