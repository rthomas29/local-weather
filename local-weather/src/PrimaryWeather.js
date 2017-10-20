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
      cityName: '',
      region: '',
      icon: '',
      fahrenheit: 0,
      description: '',
    }
  }
  handleChange(value) {
    this.setState({ inputValue: value })
  }
  handleSubmit() {
    this.setState({ cityName: this.state.inputValue })
  }
  getWeatherData() {
    axios
      .get('http://ipinfo.io')
      .then(response => {
        this.lat = Math.ceil(response.data.loc.slice(0, 6))
        this.lon = Math.ceil(response.data.loc.slice(8, 15))
        this.cityName = response.data.city
        this.region = response.data.region
      })
      .then(response => {
        const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this
          .lon}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`
        axios.get(baseUrl).then(response => {
          this.setState({
            cityName: this.cityName,
            region: this.region,
            fahrenheit: response.data.main.temp,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
          })
        })
      })
  }

  getWeatherByCityName(city) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`,
      )
      .then(response => {
        this.setState({
          cityName: this.state.inputValue,
          region: response.data.sys.country,
          fahrenheit: response.data.main.temp,
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
        })
      })
  }
  componentDidMount() {
    this.getWeatherData()
  }
  shouldComponentUpdate(nextState) {
    return this.state.inputValue !== nextState.inputValue || this.state.cityName !== nextState.cityName
  }
  componentDidUpdate() {
    this.getWeatherByCityName(this.state.inputValue)
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
