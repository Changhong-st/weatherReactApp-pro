import React from 'react';
import styles from './info.module.scss';

function CurrentInfo (props) {
	return (
		<div className={styles.CurrentInfo}>
			<div className={styles['CurrentInfo__temperature']}>
				<span>{props.temperature} °</span>
			</div>
			<div className={styles['CurrentInfo__weather']}>
				<span>{props.weather}</span>
			</div>
			<div className={styles['CurrentInfo__details']}>
				<div className={styles['CurrentInfo__details__item']}>
					<span>HUMIDITY</span>
					<br/>
					<span>{props.humidity}%</span>
				</div>
				<div className={styles.division} />
				<div className={styles['CurrentInfo__details__item']}>
					<span>WIND</span>
					<br/>
					<span>{props.wind} K/M</span>
				</div>
			</div>
		</div>
	);
}

export default CurrentInfo;