import React, { Component } from 'react';
import Header from './Header';
import Map from './Map';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };

    this.fetchEarthQuakeData = this.fetchEarthQuakeData.bind(this);
  }

  componentDidMount(){
    // Fetching earth quake date on start
    this.fetchEarthQuakeData();
  }


  // This function makes HTTP call to the API and returns the list of earthquakes and update the state locations array
  fetchEarthQuakeData(){
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
    .then((result) => {
      return result.json();
    }).then((jsonResult) => {
      this.setState({
      locations: jsonResult.features
    });
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Map locations = {this.state.locations} />
      </div>
    );
  }
}

export default App;
