import React from 'react';
import OtherCity from './OtherCities/OtherCities';
import ForecastWeather from './ForecastWeather/ForecastWeather';
import styles from './index.module.scss';


function WeatherBottom (props) {
	const {dataArray, onOtherCitiesClick} = props.children;
	const cityArray = dataArray.slice(1);
	const forecastArray = dataArray[0]?.forecast;
	
	return (
		<div className={styles.WeatherBottom}>
			<OtherCity>
				{
					{
						cityArray,
						onOtherCitiesClick
					}    
				}
			</OtherCity>
			<div className={styles.division} />
			<ForecastWeather forecastArray = {forecastArray}/>
		</div>
	);
}

export default WeatherBottom;