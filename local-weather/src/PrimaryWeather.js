import React, { Component } from 'react'
import CurrentWeatherDetails from './CurrentWeatherDetails'
import SearchComponent from './SearchComponent'
import Spinner from 'react-spinkit'
import axios from 'axios'

class PrimaryWeather extends Component {
  constructor(props) {
    super(props)
  }
  ipInfoUrl = 'http://ipinfo.io'

  getWeatherData() {
    axios.get(this.ipInfoUrl).then(response => {
      this.setState({
        cityName: response.data.city,
        region: response.data.region,
      })
      const latitude = Math.ceil(response.data.loc.slice(0, 6))
      const longitude = Math.ceil(response.data.loc.slice(8, 15))
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
      axios.get(baseUrl).then(response => {
        this.setState({
          tempFarenheit: response.data.main.temp,
          minTemp: response.data.main.temp_min,
          maxTemp: response.data.main.temp_max,
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
        })
      })
    })
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     axios.get(this.ipInfoUrl).then(response => {
  //       this.setState({
  //         cityName: response.data.city,
  //         region: response.data.region,
  //       })
  //       const latitude = Math.ceil(response.data.loc.slice(0, 6))
  //       const longitude = Math.ceil(response.data.loc.slice(8, 15))
  //       const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
  //       axios.get(baseUrl).then(response => {
  //         this.setState({
  //           tempFarenheit: response.data.main.temp,
  //           minTemp: response.data.main.temp_min,
  //           maxTemp: response.data.main.temp_max,
  //           icon: response.data.weather[0].icon,
  //           description: response.data.weather[0].description,
  //         })
  //       })
  //     })
  //   }, 3500)
  // }
  render() {
    return (
      <div>
        <CurrentWeatherDetails name="Miami" region="Florida" icon="04n" fahrenheit="84" />
        <SearchComponent />
      </div>
    )
  }
}

export default PrimaryWeather
