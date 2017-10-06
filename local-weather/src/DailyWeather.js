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
          return <h2>{formatDate(day.dt)}</h2>
        })}
      </div>
    )
  }
}
export default DailyWeather
