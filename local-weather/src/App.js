import React, { Component } from 'react'
import './App.css'
import WeatherDetails from './WeatherDetails'
import DailyWeather from './DailyWeather'
import Spinner from 'react-spinkit'

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
      icon: 0,
      dailyForecastArray: [],
    }
  }

  ipInfoUrl = 'http://ipinfo.io'
  getInitialWeatherData() {
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

  getDailyForecast() {
    axios.get(this.ipInfoUrl).then(response => {
      const lat = Math.ceil(response.data.loc.slice(0, 6))
      const lon = Math.ceil(response.data.loc.slice(8, 15))
      const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
      axios.get(url).then(response => {
        const dailyWeatherData = response.data
        this.setState({
          dailyForecastArray: dailyWeatherData.list,
        })
      })
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.getInitialWeatherData()
      this.getDailyForecast()
    }, 3500)
  }

  render() {
    if (this.state.tempFarenheit === 0) {
      return (
        <div className="container justify-content-center centered">
          <Spinner className="center-block" name="pacman" color="steelblue" />
        </div>
      )
    }
    return (
      <div>
        <WeatherDetails
          name={this.state.cityName}
          region={this.state.region}
          icon={this.state.icon}
          farenheit={Math.round(this.state.tempFarenheit)}
          minTemp={Math.round(this.state.minTemp)}
          maxTemp={Math.round(this.state.maxTemp)}
        />
        <DailyWeather dailyForecast={this.state.dailyForecastArray} />
      </div>
    )
  }
}

export default App
