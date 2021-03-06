import React, {useState} from 'react';
import styles from './country.module.scss';

const defaultValue = 'country or code';

const Country = (props) => {
	const [hide, setHide] = useState(true); 
	const [country, setCountry] = useState(defaultValue);
    
	const toggleInput = () => {
		setHide(!hide);
		setCountry(defaultValue);    
	};

	const handleFocus = () => {
		if (country === defaultValue) {
			setCountry('');
		}
	};

	const handleChange = (e) => {
		setCountry(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onCountryChange(country);
		toggleInput();
	};

	const handleBlur = (e) => {
		return (country === '')? toggleInput() : handleSubmit(e);
	};

	return (
		<div className={styles.Country}>
			<div    
				className={styles['Country__name']}
				onClick={toggleInput}
			>
				{props.country}
			</div>
			{hide?
				''
			:
				<form   
					className={styles['Country__form']}
					onSubmit={handleSubmit}
				>
					<input  
						value={country}
						onChange={handleChange}
						onBlur={handleBlur}
						onFocus={handleFocus}
					/>
				</form> 
			}   
		</div>
	);
}

export default Country;