import React, { Component } from 'react'
import './App.css'
import WeatherDetails from './WeatherDetails'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      region: '',
      tempFarenheit: 0,
      minTemp: 0,
      maxTemp: 0,
    }
  }
  componentDidMount() {
    axios.get('http://ipinfo.io').then(response => {
      this.setState({
        cityName: response.data.city,
        region: response.data.region,
      })
      const latitude = Math.ceil(response.data.loc.slice(0, 6))
      const longitude = Math.ceil(response.data.loc.slice(8, 15))
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
      axios.get(baseUrl).then(response => {
        console.log(response.data)
        this.setState({
          tempFarenheit: response.data.main.temp,
          minTemp: response.data.main.temp_min,
          maxTemp: response.data.main.temp_max,
        })
      })
    })
  }

  render() {
    return (
      <WeatherDetails
        name={this.state.cityName}
        farenheit={this.state.tempFarenheit}
        minTemp={this.state.minTemp}
        maxTemp={this.state.maxTemp}
        region={this.state.region}
      />
    )
  }
}

export default App
