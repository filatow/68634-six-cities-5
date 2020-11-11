import React, {PureComponent} from "react";
import {connect} from "react-redux";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";
import "./map.css";
class Map extends PureComponent {
  constructor() {
    super();

    this._markers = [];
  }

  _mapInit(city, zoom) {
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _addMarker(latLang) {
    const marker = leaflet
      .marker(latLang, {icon: this._icon})
      .addTo(this._map);
    this._markers.push(marker);
  }

  componentDidMount() {

    const {
      markersLatLngs,
      city,
      zoom
    } = this.props;

    this._mapInit(city, zoom);
    // this._map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    markersLatLngs.forEach((latLang) => {
      this._addMarker(latLang);
    });
  }

  componentDidUpdate() {

    this._markers.map((marker) => {
      marker.remove();
    });
    this._markers.splice(0, this._markers.length);

    this.props.markersLatLngs.forEach((latLang) => {
      this._addMarker(latLang);
    });
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}


Map.propTypes = {
  markersLatLngs: PropTypes.arrayOf(PropTypes.object).isRequired,
  city: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  zoom: PropTypes.number
};

Map.defaultProps = {
  zoom: 12
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  markersLatLngs: state.markersLatLngs
});

export {Map};
export default connect(mapStateToProps)(Map);
