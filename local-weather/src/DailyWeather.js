import React, { Component } from 'react'
import moment from 'moment'

const formatDate = stamp => {
  return moment.unix(stamp).format('dddd MMMM Do')
}

class DailyWeather extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          {this.props.dailyForecast.map(day => {
            let url = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`
            return (
              <div key={day.dt} className="col">
                <h2>{formatDate(day.dt)}</h2>
                <p>
                  <img src={url} alt="weather description icon" />
                </p>
                <p>{Math.round(day.temp.day)} &#8457;</p>
                <p>{day.weather[0].description}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default DailyWeather
