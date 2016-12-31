// in progress...
'use strict';

$(document).ready(() => {
    // cache DOM
    const $elHeader = $('.page-header');
    const $elCity = $('#city-name');
    const $weatherDescrip = $('#weather-description');
    const $elCityWeather = $('#city-weather');
    const $elSubInfo = $('#weather-sub-info');
    const $elWeatherIcon = $('.icons');
    const $fahrButton = $('#fahr');
    const $celsButton = $('#cels');

    // fahren to celsius converter function
    const fahrenToCels = (celsiusTemp) => {
        celsiusTemp = (celsiusTemp - 32) * 5 / 9;
        return celsiusTemp;
    }

    // get ip info to get lang., long.
    $.getJSON('http://ipinfo.io', (data) => {
        $elHeader.hide().html(data.city + ', ' + data.region).fadeIn('slow');
        let latitude = Math.ceil(data.loc.slice(0, 6));
        let longitude = Math.ceil(data.loc.slice(8, 15));
        let baseUrl = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + latitude + '&lon=' + longitude + '&APPID=b8d68c8a65b14ad16c7c153dca2c7882' + '&units=imperial';

        // hit OpenWeatherAPI for current temp.
        $.ajax({
            type: 'GET',
            url: baseUrl,
            success: (data) => {
                $weatherDescrip
                    .hide()
                    .html(data.weather[0].description)
                    .fadeIn('slow');
                /* data.weather[0].id changes according to weather. This changes
                   icon using weather-icons created by @erik_flowers*/
                $elWeatherIcon.addClass('wi wi-owm-' + data.weather[0].id);

                // show current temp.   
                $elCityWeather
                    .hide()
                    .html('Current temp: ' + data.main.temp + ' &#8457' + '<br>')
                    .fadeIn('slow');
                // low and high temps 
                $elSubInfo
                    .hide()
                    .html(
                        'Low: ' + data.main.temp_min + ' &#8457' + '<br>' +
                        'High: ' + data.main.temp_max + ' &#8457' + '<br>'
                    ).fadeIn('slow');
                // handles change from Fahrenheit to Celsius  
                $celsButton.click(() => {
                        $elCityWeather
                            .hide()
                            .html('Current Temp: ' + fahrenToCels(data.main.temp).toFixed(2) + ' ' + '&#8451')
                            .fadeIn('slow');
                        // shows high/low info in cels.
                        $elSubInfo
                            .hide()
                            .html('Low: ' + fahrenToCels(data.main.temp_min).toFixed(2) + ' &#8451' + '<br>' +
                                'High: ' + fahrenToCels(data.main.temp_max).toFixed(2) + ' &#8451' + '<br>'
                            ).fadeIn('slow');

                    })
                    // handles Celsius to Fahr. conversion
                $fahrButton.click(() => {
                    $elCityWeather
                        .hide()
                        .html('Current Temp: ' + data.main.temp + ' ' + '&#8457')
                        .fadeIn('slow');

                    $elSubInfo
                        .hide()
                        .html('Low: ' + data.main.temp_min + ' &#8457' + '<br>' +
                            'High: ' + data.main.temp_max + ' &#8457' + '<br>'
                        ).fadeIn('slow');
                })
            },
            error: () => {
                console.log('error');
            }
        });
    });
})