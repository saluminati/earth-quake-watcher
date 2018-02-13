import React, { Component } from 'react';

// This component shows the locations and date of the earthquake in a callout
class EventInfo extends Component {

  render() {
    return(
      <div className="callout top">
        <strong>Location: </strong>{this.props.location_name} <br /><br />
        <strong>Date: </strong>{this.props.date}
      </div>
    );
  }
}

export default EventInfo
