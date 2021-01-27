import React from 'react';
import styles from './ForecastWeather.module.scss';
import ForecastListItem from './ForecastListItem';

function ForecastWeather (props) {
	const forecastList = props.forecastArray.map((forecast) =>
		<ForecastListItem
		 	key = {forecast.day} 
		 	info = {forecast}
		/>
	);
	return (
		<div className={styles['ForecastWeather']}>
			<h2 className={styles['ForecastWeather__title']}>
				Forecast
			</h2>
			<div className={styles['ForecastList']}>
				{forecastList}
			</div>
		</div>
	);
}

export default ForecastWeather;