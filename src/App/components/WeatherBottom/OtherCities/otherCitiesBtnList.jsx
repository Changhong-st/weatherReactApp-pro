import React from 'react';
import OtherCityButton from './otherCitiesBtn';
import styles from './otherCities.module.scss';

function OtherCityBtnList ({cityArray, onOtherCitiesClick}) {
	const buttons = cityArray?.map((city, index) => 
		<OtherCityButton    
			key = {`${city.countryCode}${city.cityName}`}
			city = {city?.cityName}
			temperature = {city?.current?.temperature}
			icon = {city?.current?.icon}
			description = {city?.current?.description}
			onOtherCitiesClick = {onOtherCitiesClick}
			index = {index}  
		/>
	);
	return (
		<div className={styles.OtherCityButtons}>
			{buttons}
		</div>
	);
}

export default OtherCityBtnList;