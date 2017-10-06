import React, { Component } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const DateHeader = styled.h4`font-size: 2em;`

const Image = styled.img`
  height: 70px;
  width: 70px;
`
const TempParagraph = styled.p`font-size: 2em;`
const DailyWeatherDiv = styled.div`margin-bottom: 60px;`

const formatDate = stamp => {
  return moment.unix(stamp).format('dddd, MMMM Do')
}

class DailyWeather extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {this.props.dailyForecast.map(day => {
            let url = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`
            return (
              <DailyWeatherDiv key={day.dt} className="col-sm-12 col-md text-center">
                <DateHeader>{formatDate(day.dt)}</DateHeader>
                <Image src={url} alt="weather description icon" />
                <TempParagraph>{Math.round(day.temp.day)} &deg;F</TempParagraph>
              </DailyWeatherDiv>
            )
          })}
        </div>
      </div>
    )
  }
}
export default DailyWeather
