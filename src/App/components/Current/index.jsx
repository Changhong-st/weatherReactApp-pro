import React, {useState, useEffect} from 'react';
import {getCode, getName} from 'country-list';
import Country from './Country/country';
import CurrentCity from './City/city';
import CurrentInfo from './Info/info';
import styles from './index.module.scss';

const Current = (props) => {
	const defaultValue = props?.children?.currentData?.countryCode;
	const [countryCode, setCountryCode] = useState(defaultValue);

	useEffect(() => {
			setCountryCode(defaultValue);
		},[defaultValue]
	);

	const getCountryCode = (inputCountry) => {
		const countryCodeLength = 2;
		const validatedInput = getCode(inputCountry) || getName(inputCountry);
		if(validatedInput){
			return (validatedInput.length > countryCodeLength) ? inputCountry : validatedInput; 
		}
		return false;
	}

	const onCountryChange = (inputCountry) => {
		const inputCode = getCountryCode(inputCountry);
		return inputCode && setCountryCode(inputCode.toUpperCase());
	}

	const {currentData, setLoading, checkCityInput, updateDataArray} = props.children;
	const {cityName, current} = currentData;
	const {temperature, humidity, wind, weather} = current;

	return (
		<div className={styles.Current}>
			<Country 	
				country={countryCode}
				onCountryChange={onCountryChange}
			/>
			<CurrentInfo    
				temperature={temperature}
				humidity={humidity}
				wind={wind}
				weather={weather}		
			/>
			<CurrentCity 	
				city={cityName}
				country={countryCode}
				checkCityInput={checkCityInput}
				setLoading={setLoading}
				updateDataArray={updateDataArray}
			/>
			<div className={styles.CurrentBottom} />
		</div>
	);
}


export default Current;