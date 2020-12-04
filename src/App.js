import React, { Component } from "react";
import MapView from "./components/MapView";
import DropZone from "./components/DropZone";
import MultiSelect from "./components/MultiSelect";
import Select from "react-select";
import RangeSlider from 'react-bootstrap-range-slider';
import exifr from 'exifr'
import "./App.css";

const optionsProject = [
  {value: [63.551440, 10.933473], label: 'E6 Kvithammar Åsen'},
  {value: 'E39M', label: 'E39 Mandal'},
  {value: 'E18RD', label: 'E18 Rugtvedt Dørdal'}
  //Legge til resterende
];


const SimpleSlider = () => {

  const [ value, setValue ] = React.useState(2018);

  return (
    <RangeSlider
      value={value}
      min={1974}
      max={2020}
      onChange={e => setValue(e.target.value)}
    />
  );

};


class App extends Component {
  state = {
    selectedOption: null,
  };


  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
    console.log("Prosjekt valgt:", this.state.selectedOption)
    );
  };

  /*
  handleView = (selectedValue) => {
    this.setState({ selectedValue }, () =>
    console.log("Value:", this.state.selectedValue)
    );
    //value => this.handleView(value.value), putte inn i onChange
  };*/


  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
        <div className="split Map">
          <MapView />
        </div>

        <div className="split right">
          <div className="centered">
            <p className="Title">Bildelagring</p>
            <p className="prosjekt">Velg prosjekt</p>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={optionsProject}
              placeholder='velg prosjekt'
              menuColor='blue'
            />
            <p className="metaData">Sorter på kategorier</p>
            <MultiSelect />
            <p className="sorterDato">Sorter på dato</p>
            <SimpleSlider />
            <p className="titleFiler">Last opp bilder</p>
            <div className="content">
            <DropZone />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
