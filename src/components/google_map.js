import React , {Component} from 'react';
import 'https://maps.googleapis.com/maps/api/js';
// console.log(google);
class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom : 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render () {
    return <div ref = "map"/>
  }
}

export default GoogleMap;
