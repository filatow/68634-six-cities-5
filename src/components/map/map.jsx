import React, {PureComponent} from "react";
import {connect} from "react-redux";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";
import "./map.css";

// import offers from "../../mocks/offers";
import {Validation} from "../../validation";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._markers = [];
  }

  _mapInit(city, zoom) {
    this._iconRegular = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this._iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this._map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _addMarker(latLng) {
    const marker = leaflet
      .marker(latLng, {icon: this._iconRegular})
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

    markersLatLngs.forEach((latLng) => {
      this._addMarker(latLng);
    });
  }

  componentDidUpdate() {
    const {mapOffers, activeMarkerOfferId, markersLatLngs} = this.props;

    this._markers.forEach((marker) => marker.remove());
    markersLatLngs.forEach((latLng) => {
      this._addMarker(latLng);
    });

    if (activeMarkerOfferId) {
      const activeOffer = mapOffers.find((offer) => offer.id === activeMarkerOfferId);
      const activeOfferLatLng = leaflet.latLng(activeOffer.coords);

      this._markers.forEach((marker) => {
        if (marker.getLatLng().equals(activeOfferLatLng)) {
          marker.setIcon(this._iconActive);
        }
      });
    } else {
      this._markers.forEach((marker) => {
        if (Object.is(marker.getIcon(), this._iconActive)) {
          marker.setIcon(this._iconRegular);
        }
      });
    }
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}


Map.propTypes = {
  mapOffers: PropTypes.arrayOf(Validation.OFFER).isRequired,
  markersLatLngs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeMarkerOfferId: PropTypes.string.isRequired,
  city: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  zoom: PropTypes.number
};

Map.defaultProps = {
  zoom: 12
};

const mapStateToProps = (state) => ({
  mapOffers: state.mapOffers,
  markersLatLngs: state.markersLatLngs,
  activeMarkerOfferId: state.activeMarkerOfferId
});

export {Map};
export default connect(mapStateToProps)(Map);
