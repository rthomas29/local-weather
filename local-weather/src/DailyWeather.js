import React, { Component } from 'react'
import moment from 'moment'

const formatDate = stamp => {
  return moment.unix(stamp).format('dddd MMMM Do')
}

class DailyWeather extends Component {
  render() {
    return (
      <div>
        {this.props.dailyForecast.map(day => {
          let url = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`
          return (
            <div key={day.dt}>
              <h2>{formatDate(day.dt)}</h2>
              <p>
                <img src={url} alt="weather description icon" />
              </p>
              <p> Temp: {day.temp.day}</p>
              <p>{day.weather[0].description}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default DailyWeather
