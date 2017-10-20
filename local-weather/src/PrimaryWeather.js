import React, { Component } from 'react'
import CurrentWeatherDetails from './CurrentWeatherDetails'
import SearchComponent from './SearchComponent'
import axios from 'axios'

class PrimaryWeather extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      inputValue: '',
      cityName: 'Miami',
      region: 'FL',
      icon: '04n',
      fahrenheit: '84',
      description: 'overcast clouds',
    }
  }
  handleChange(value) {
    this.setState({ inputValue: value })
  }
  saySubmitted() {
    alert('submitted')
  }
  handleSubmit() {
    this.setState({ cityName: this.state.inputValue })
  }
  // getWeatherData() {
  //   axios
  //     .get('http://ipinfo.io')
  //     .then(response => {
  //       this.lat = Math.ceil(response.data.loc.slice(0, 6))
  //       this.lon = Math.ceil(response.data.loc.slice(8, 15))
  //       this.cityName = response.data.city
  //       this.region = response.data.region
  //     })
  //     .then(response => {
  //       const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this
  //         .lon}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
  //       axios.get(baseUrl).then(response => {
  //         this.setState({
  //           tempFahrenheit: response.data.main.temp,
  //           icon: response.data.weather[0].icon,
  //           description: response.data.weather[0].description,
  //         })
  //       })
  //     })
  // }
  componentDidMount() {
    // this.getWeatherData()
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
        <SearchComponent
          onInputChange={this.handleChange}
          inputValue={this.state.inputValue}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default PrimaryWeather
