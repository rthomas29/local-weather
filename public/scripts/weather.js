$(document).ready(() => {
  const $elHeader = $('.page-header');
  const $elWeatherDescription = $('#weather-description');
  const $elCityWeather = $('#city-weather');
  const $elSubInfo = $('#weather-sub-info');
  const $elWeatherIcon = $('.icons');

  const fahrenToCels = (temp) => {
    const celsiusTemp = ((temp - 32) * 5) / 9;
    return celsiusTemp;
  };

  const weatherDescriptionFunc = (data) => {
    $elWeatherDescription.hide().html(data.weather[0].description).fadeIn('slow');
    $elWeatherIcon.addClass(`wi wi-owm-${data.weather[0].id}`);
  };

  const showCurrentTempFunc = (data) => {
    $elCityWeather.hide().html(`Current temp: ${data.main.temp} &#8457 <br>`).fadeIn('slow');
    $elSubInfo.hide().html(`Low: ${data.main.temp_min} &#8457 <br> High: ${data.main.temp_max} &#8457 <br>`).fadeIn('slow');
  };

  const scaleConvertFunc = (data) => {
    $('button').click((event) => {
      if (event.target.id === 'fahr') {
        $elCityWeather.hide().html(`Current Temp: ${data.main.temp} &#8457`).fadeIn('slow');
        $elSubInfo.hide().html(`Low: ${data.main.temp_min} &#8457 <br> High: ${data.main.temp_max} &#8457 <br>`).fadeIn('slow');
      }

      if (event.target.id === 'cels') {
        $elCityWeather.hide().html(`Current Temp ${fahrenToCels(data.main.temp).toFixed(1)} &#8451`).fadeIn('slow');
        $elSubInfo.hide().html(`Low: ${fahrenToCels(data.main.temp_min).toFixed(1)} &#8451 <br> High: ${fahrenToCels(data.main.temp_max).toFixed(1)} &#8451 <br>`).fadeIn('slow');
      }
    });
  };
  $.getJSON('http://ipinfo.io').then((data) => {
    $elHeader.hide().html(`${data.city}, ${data.region}`).fadeIn('slow');
    const latitude = Math.ceil(data.loc.slice(0, 6));
    const longitude = Math.ceil(data.loc.slice(8, 15));
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=b8d68c8a65b14ad16c7c153dca2c7882&units=imperial`;

    $.get(baseUrl).then((response) => {
      weatherDescriptionFunc(response);
      showCurrentTempFunc(response);
      scaleConvertFunc(response);
    }, () => ('error'));
  });
});
