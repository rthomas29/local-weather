import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import PrimaryWeather from './PrimaryWeather'
import FiveDayForecast from './FiveDayForecast'
import Spinner from 'react-spinkit'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fiveDayWeather: [],
      //   {
      //     temp: 83,
      //     icon: '04n',
      //     description: 'overcast clouds',
      //   },
      //   {
      //     temp: 84,
      //     icon: '04n',
      //     description: 'overcast clouds',
      //   },
      //   {
      //     temp: 85,
      //     icon: '04n',
      //     description: 'overcast clouds',
      //   },
      //   {
      //     temp: 86,
      //     icon: '04n',
      //     description: 'overcast clouds',
      //   },
      //   {
      //     temp: 87,
      //     icon: '04n',
      //     description: 'overcast clouds',
      //   },
      // ],
    }
  }
  // getFiveDayForecast() {
  //   axios.get('http://ipinfo.io').then(response => {
  //     const lat = Math.ceil(response.data.loc.slice(0, 6))
  //     const lon = Math.ceil(response.data.loc.slice(8, 15))
  //     const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
  //     axios.get(url).then(response => {
  //       const dailyWeatherData = response.data
  //       this.setState({
  //         fiveDayWeather: dailyWeatherData.list,
  //       })
  //     })
  //   })
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.getFiveDayForecast()
  //   }, 3500)

  render() {
    // if (this.state.fiveDayWeather.length === 0) {
    //   return (
    //     <div className="container justify-content-center centered">
    //       <Spinner className="center-block" name="pacman" color="steelblue" />
    //     </div>
    //   )
    // }
    return (
      <div className="container">
        <PrimaryWeather />
        {/* <FiveDayForecast fiveDayWeather={this.state.fiveDayWeather} /> */}
      </div>
    )
  }
}
export default App

ReactDOM.render(App, document.getElementById('root'))
