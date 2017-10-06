import React from 'react'
import styled from 'styled-components'

const CurrentTempDiv = styled.div`
  max-width: 550px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
`
const TempParagraph = styled.div`
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
    <div className="container">
      <div className="row">
        <div className="col">
          <CurrentTempDiv className="main-output text-center">
            <h1 className="page-header text-center">
              {props.name}, {props.region}
            </h1>
            <Image src={url} alt="weather icon" />
            <TempParagraph>
              <p id="city-weather">{props.farenheit} &#8457;</p>
            </TempParagraph>
          </CurrentTempDiv>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails
