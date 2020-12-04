import React, { Component} from "react";
import Control from 'react-leaflet-control';
import { Map, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//Posisjon i Trondheim - sentrere kartet i midten av Norge
//const startPosition = [63.430515, 10.395053];

const polygoon = [
  [63.490113, 10.881942],
  [63.539078, 10.784397],
  [63.611563, 11.037967],
  [63.604848, 11.073352],
];


class MapView extends Component {

  state = {
      position: [63.430515, 10.395053],
      zoomTo: 5
  }

  /*
  Finne posisjon til brukeren og holder den der
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
    }
  }*/
  

  render() {
    return (
      <Map ref={this.mapRef} center={this.state.position} zoom={this.state.zoomTo} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon 
          onclick={ () => this.setState({position: [63.551440, 10.933473], zoomTo: 11})} 
          color={'red'} 
          positions={polygoon}
        />
        <Control position="topleft">
          <button>Posisjon</button>
        </Control>
      </Map>
    );
  }
}

export default MapView;
