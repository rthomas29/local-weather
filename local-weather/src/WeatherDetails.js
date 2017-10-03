import React, { Component } from 'react'

class WeatherDetails extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="main-output text-center well well-lg">
          <h1 className="page-header text-center"> </h1>
          <p id="weather-description" />
          <i className="icons" />
          <p id="weather-icon" />
          <p id="city-name" />
          <p id="city-weather" />
          <p id="weather-sub-info" className="text-center" />
          <button id="fahr" className="btn btn-default">
            Farenheit
          </button>
          <button id="cels" className="btn btn-default" />
          <button id="advSearch" className="btn btn-default">
            Search by zip
          </button>
        </div>
      </div>
    )
  }
}

export default WeatherDetails
