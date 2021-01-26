import React, {Component} from 'react';
import styles from './otherCities.less'
class OtherCityButton extends Component {

	handleClick = (e) => {
		this.props.onOtherCitiesClick(this.props.index);
	};

	render() {
		const {city, temperature, icon, description} = this.props;
		
		return (
			<button 
				className={styles.OtherCityButton}
				onClick = {this.handleClick}
			>
				<h3 className={styles['OtherCityButton__city']}>
					{city}
				</h3>
				<div className={styles['OtherCityButton__temperature']}>
					{Math.round(temperature)} °
				</div>
				<div className={styles['OtherCityButton__icon']}>
					<img src ={`http://openweathermap.org/img/wn/${icon}.png`} alt = {description}/>
				</div>
			</button>
		);
	}
}

export default OtherCityButton;