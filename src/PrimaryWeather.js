import React, { Component } from 'react';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import axios from 'axios';

class PrimaryWeather extends Component {
  state = {
    inputValue: '',
    cityName: '',
    region: '',
    icon: '',
    fahrenheit: 0,
    description: '',
  };
  getWeatherData() {
    axios
      .get('https://ipinfo.io')
      .then(response => {
        this.lat = Math.ceil(response.data.loc.slice(0, 6));
        this.lon = Math.ceil(response.data.loc.slice(8, 15));
        this.city = response.data.city;
        this.region = response.data.region;
      })
      .then(response => {
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${
          this.lon
        }&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`;
        axios.get(baseUrl).then(response => {
          this.setState({
            cityName: this.city,
            region: this.region,
            fahrenheit: response.data.main.temp,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
          });
        });
      });
  }

  componentDidMount() {
    this.getWeatherData();
  }
  render() {
    return (
      <div>
        <CurrentWeatherDetails
          name={this.state.cityName}
          region={this.state.region}
          icon={this.state.icon}
          fahrenheit={this.state.fahrenheit}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default PrimaryWeather;
