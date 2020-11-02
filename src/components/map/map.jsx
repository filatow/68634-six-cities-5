import React, {PureComponent} from "react";
import leaflet from "leaflet";
import PropTypes from 'prop-types';

import '../../../node_modules/leaflet/dist/leaflet.css';
import './map.css';

export default class Map extends PureComponent {
  constructor() {
    super();

    this.addMarker = this.addMarker.bind(this);
  }

  addMarker(map, сoords, icon) {
    leaflet
      .marker(сoords, {icon})
      .addTo(map);
  }

  componentDidMount() {
    const {markerCoords} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
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

    const offerCoords = [52.3709553943508, 4.89309666406198];
    leaflet
      .marker(offerCoords, {icon})
      .addTo(map);

    markerCoords.forEach((coords) => {
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
  markerCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
};
