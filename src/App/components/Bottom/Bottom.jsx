import React from 'react';
import OtherCity from './components/OtherCities';
import ForecastWeather from './components/ForecastWeather';


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