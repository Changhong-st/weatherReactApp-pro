import React, { useState } from 'react';
import getWeather from '../../../api/getWeather';
import styles from './city.module.scss';

const defaultValue = 'Which city?';
const CurrentCity = (props) => {
	const [city, setCity] = useState(defaultValue);

	const handleFocus = () => {
		if (city === defaultValue) {
			setCity('');
		}	
	};

	const updateData = async(inputCity) => {
		props.setLoading(true);
		const newData = await getWeather(props.country, inputCity);
		if(newData === undefined) {
			props.setLoading(false);
			return alert('country or city can not found');
		}
		props.updateDataArray(newData);
		props.setLoading(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validate = props.checkCityInput(city, props.country);
		if(validate) {
			updateData(city);
		}
		setCity(defaultValue);
	};

	const handleChange = (e) => {
		setCity(e.target.value)
	}

	const handleBlur = (e) => {
		return (city === '') && setCity(defaultValue);
	};

	return (
		<div className={styles.City}>
			<h1>{props.city}</h1>
			<form 
				className={styles['City__form']} 
				onSubmit={handleSubmit}
			>
				<input 
					className={styles['City__form__input']}
					value={city}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
			</form>
		</div>
	);
}

export default CurrentCity;