import React, { Component } from 'react';
import styled from 'styled-components';

const CurrentTempDiv = styled.div`
  max-width: 550px;
  margin: 50px auto 80px auto;
`;
const TempParagraph = styled.div`
  font-size: 3em;
  text-align: center;
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
`;
class CurrentWeatherDetails extends Component {
  capitalizeFirstLetter(str) {
    const output = str.split('');
    for (let i = 0; i < output.length; i++) {
      if (i === 0) {
        output[i] = output[i].toUpperCase();
      } else if (output[i] === ' ') {
        output[i + 1] = output[i + 1].toUpperCase();
      }
    }
    return output.join('');
  }
  render() {
    const url = `http://openweathermap.org/img/w/${this.props.icon}.png`;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CurrentTempDiv className="text-center">
              <h1 className="page-header text-center">
                {this.props.name}, {this.props.region}
              </h1>
              <Image src={url} alt="weather icon" />
              <p>{this.capitalizeFirstLetter(this.props.description)}</p>
              <TempParagraph>
                <p id="city-weather">{Math.round(this.props.fahrenheit)} &deg;F</p>
              </TempParagraph>
            </CurrentTempDiv>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeatherDetails;
