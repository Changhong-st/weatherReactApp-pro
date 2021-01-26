import React from 'react';
import OtherCity from './OtherCities/OtherCities';
import ForecastWeather from './ForecastWeather/ForecastWeather';


function WeatherBottom (props) {
    return (
        <div className = 'WeatherBottom'>
            <OtherCity cityArray = {props.cityArray}/>
            <div className = 'division'></div>
            <ForecastWeather forecastArray = {props.forecastArray}/>
        </div>
    );
}

export default WeatherBottom;