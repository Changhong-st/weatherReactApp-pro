import React, {useState, useEffect, useReducer} from 'react';
import styles from './index.module.scss';
import Current from '../Current/index';
import WeatherBottom from '../WeatherBottom/index';
import getWeather from '../../api/getWeather';

/* data format									
data
	- cityName
	- current
		temperature	
		humidity
		wind
		weather
		icon
		description
	- forecast[0]-[4] (same a current)
	- countryCode 
*/
const loadingStyle = {
  borderRadius : '32px',
};

const Weather = () => {
	const [loading, setLoading] = useState(true);
	const [dataArray, dispatch] = useReducer(updateArray, []);
	
	function updateArray(dataArray, action) {
		const newDataArray = dataArray.map((city) => city);
		let currentData;
		switch(action.type) {
			case 'New_Array':
				return action.array;
			case 'New_DATA':
				currentData  = action.data;
				newDataArray.pop(); //return the last input
				break;
			case 'SWITCH':
				currentData = newDataArray.splice(action.index, 1)[0]; //replace index element, then return the first element
				break;
			default:
				throw new Error();
		}
		newDataArray.unshift(currentData); //add currentData to array
		return newDataArray;
	}
	
	const newData = (data) => {
		dispatch({
			type: 'New_DATA',
			data: data, 
		});
	}

	const reorderArray = (index) => {
		dispatch({
			type: 'SWITCH',
			index: index, 
		});
	}

	const newArray = (array) => {
		dispatch({
			type: 'New_Array',
			array: array, 
		});
	}


	const initialRequest = async() => {
		const defaultCities = ['Brisbane', 'Sydney', 'Melbourne', 'Perth'];
		const defaultCountry = 'AU';
		const dataArray = [];
		for(let i = 0; i < defaultCities.length; i++) {
			let city = defaultCities[i];
			let cityData = await getWeather(defaultCountry, city);
			dataArray.push(cityData);
		}
		newArray(dataArray);
		setLoading(false);
	};

	useEffect(() => {
			initialRequest();
		},
		[]);

	const onOtherCitiesClick = (buttonIndex) => {
		const arrayIndex = buttonIndex + 1;
		reorderArray(arrayIndex);
	}

	const checkCityInput = (inputCity, inputCountry) => {
		const arrayIndex = dataArray.findIndex((data) => {
			return (data.cityName.toUpperCase() === inputCity.toUpperCase()) &&
					(data.countryCode === inputCountry);
		});
		if(arrayIndex > 0) {
			const buttonIndex = arrayIndex - 1;
			onOtherCitiesClick(buttonIndex);
			return false;
		}else{
			return (arrayIndex === 0) ? false : true;
		}
	}

	const currentData = dataArray[0];

	return (
		<div className={styles.Weather}>
			{loading?
				<div className='Current' style={loadingStyle}>
					<div className='loading'>
						Loading...
					</div>
				</div>
			:
				<>
					<Current>
						{
							{
								currentData,
								setLoading,
								checkCityInput,
								updateDataArray: newData
							}
						}
					</Current>
					<WeatherBottom>
						{
							{
								dataArray,
								onOtherCitiesClick
							}
							
						}
					</WeatherBottom>
				</>
			}
		</div>
	);
}

export default Weather;