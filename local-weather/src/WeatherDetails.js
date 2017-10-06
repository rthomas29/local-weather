import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
  font-size: 3em;
  text-align: center;
`
const Image = styled.img`
  height: 150px;
  width: 150px;
`
const WeatherDetails = props => {
  let url = `http://openweathermap.org/img/w/${props.icon}.png`
  return (
    <div className="container details">
      <div className="row">
        <div className="col">
          <div className="main-output text-center well well-lg">
            <h1 className="page-header text-center">
              {props.name}, {props.region}
            </h1>
            <Image src={url} alt="weather icon" />
            <Description>
              <p id="weather-description">{props.description}</p>
              <p id="city-name" />
              <p id="city-weather">{props.farenheit} &#8457;</p>
              <p id="weather-sub-info" className="text-center" />
            </Description>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails
