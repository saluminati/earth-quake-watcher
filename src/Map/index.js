import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import PropTypes from 'prop-types';
import Annotation from './annotation';

class Map extends Component {
  render() {

    // Mapping the locations props to Annotation list
    const locations = this.props.locations.map((location) => (
      <Annotation
        lat={location.geometry.coordinates[1]}
        lng={location.geometry.coordinates[0]}
        location_name={location.properties.title}
        date = {location.properties.time}
        key={location.id}
      />
    ));

    return(
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
      <GoogleMap
        bootstrapURLKeys={{ key: ['AIzaSyCspx0oRSngQ4FNXbpK94Itg19djEtsTCo'] }}
        center={this.props.center}
        zoom={this.props.zoom}>
        {locations}
        </GoogleMap>
      </div>
    );
  }
}

 Map.propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number
  };

 Map.defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 0.01
 };

export default Map
