import React, { Component } from 'react';
import './App.css';
import WeatherDetails from './WeatherDetails';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      tempFarenheit: 0,
    };
  }
  componentDidMount() {
    axios.get('http://ipinfo.io').then(response => {
      const latitude = Math.ceil(response.data.loc.slice(0, 6));
      const longitude = Math.ceil(response.data.loc.slice(8, 15));
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`;
      axios.get(baseUrl).then(response => {
        console.log(response.data);
        this.setState({
          cityName: response.data.name,
          tempFarenheit: response.data.main.temp,
        });
      });
    });
  }

  render() {
    return <WeatherDetails name={this.state.cityName} farenheit={this.state.tempFarenheit} />;
  }
}

export default App;
