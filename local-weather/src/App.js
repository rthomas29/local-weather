import React, { Component } from 'react'
import './App.css'
import PrimaryWeather from './PrimaryWeather'
import DailyForecast from './DailyForecast'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dailyWeatherArray: [],
    }
  }
  getDailyForecast() {
    axios.get(this.ipInfoUrl).then(response => {
      const lat = Math.ceil(response.data.loc.slice(0, 6))
      const lon = Math.ceil(response.data.loc.slice(8, 15))
      const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
      axios.get(url).then(response => {
        const dailyWeatherData = response.data
        console.log(dailyWeatherData)
        this.setState({
          dailyWeatherArray: dailyWeatherData.list,
        })
      })
    })
  }
  componentDidMount() {
    this.getDailyForecast()
  }
  render() {
    return (
      <div className="container">
        <PrimaryWeather />
        <DailyForecast displayArray={this.state.dailyWeatherArray} />
      </div>
    )
  }
}

export default App
