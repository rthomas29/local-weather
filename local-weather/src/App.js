import React, { Component } from 'react'
import './App.css'
import PrimaryWeather from './PrimaryWeather'
import FiveDayForecast from './FiveDayForecast'
import Spinner from 'react-spinkit'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fiveDayWeatherList: [],
    }
  }

  getFiveDayForecast() {
    axios.get('http://ipinfo.io').then(response => {
      const lat = Math.ceil(response.data.loc.slice(0, 6))
      const lon = Math.ceil(response.data.loc.slice(8, 15))
      const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
      axios.get(url).then(response => {
        const dailyWeatherData = response.data
        this.setState({
          fiveDayWeatherList: dailyWeatherData.list,
        })
      })
    })
  }
  componentDidMount() {
    setTimeout(() => {
      this.getFiveDayForecast()
    }, 3500)
  }
  render() {
    if (this.state.fiveDayWeatherList.length === 0) {
      return (
        <div className="container justify-content-center centered">
          <Spinner className="center-block" name="pacman" color="steelblue" />
        </div>
      )
    }
    return (
      <div className="container">
        <PrimaryWeather />
        <FiveDayForecast fiveDayWeather={this.state.fiveDayWeatherList} />
      </div>
    )
  }
}

export default App
