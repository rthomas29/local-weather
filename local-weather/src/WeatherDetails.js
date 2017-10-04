import React from 'react'

const WeatherDetails = props => {
  return (
    <div className="col-md-6 col-md-offset-3">
      <div className="main-output text-center well well-lg">
        <h1 className="page-header text-center">
          {props.name}, {props.region}
        </h1>
        <p id="weather-description" />
        <i className="icons" />
        <p id="weather-icon" />
        <p id="city-name" />
        <p id="city-weather">Current Temperature: {props.farenheit} degrees farenheit</p>
        <p id="city-weather">Min: {props.minTemp} degrees farenheit</p>
        <p id="city-weather">Max: {props.maxTemp} degrees farenheit</p>
        <p id="weather-sub-info" className="text-center" />
      </div>
    </div>
  )
}

export default WeatherDetails
