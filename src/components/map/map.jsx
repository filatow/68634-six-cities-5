import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";
import "./map.css";
export default class Map extends PureComponent {

  addMarker(map, сoords, icon) {
    leaflet
      .marker(сoords, {icon})
      .addTo(map);
  }

  componentDidMount() {
    const {
      markers,
      city,
      zoom = 12} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    markers.forEach((coords) => {
      this.addMarker(map, coords, icon);
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}


Map.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  city: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number
};
