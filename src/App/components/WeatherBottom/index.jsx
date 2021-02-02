import React from 'react';
import OtherCity from './OtherCities/index';
import ForecastWeather from './ForecastWeather/ForecastWeather';
import styles from './index.module.scss';


function WeatherBottom ({ dataArray, onOtherCitiesClick }) {
	const cityArray = dataArray?.slice(1);
	const forecastArray = dataArray[0]?.forecast;
	
	return (
		<div className={styles.WeatherBottom}>
			<OtherCity
				cityArray={cityArray}
				onOtherCitiesClick={onOtherCitiesClick}
			/>
			<div className={styles.division} />
			<ForecastWeather forecastArray={forecastArray}/>
		</div>
	);
}

export default WeatherBottom;