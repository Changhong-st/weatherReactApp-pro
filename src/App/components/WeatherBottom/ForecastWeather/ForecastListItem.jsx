import React from 'react';
import styles from './ForecastWeather.module.scss'

const ForecastListItem = (props) => {
    const iconUrlAddress = `http://openweathermap.org/img/wn/${props.info.icon}@2x.png`;
    return (
        <div className={styles['ForecastList__Item']}>
            <h3 
                className={styles['ForecastList__Item__day']}
            >
                {props.info.day}
            </h3>
            <img 
                className={styles['ForecastList__Item__icon']} 
                src={iconUrlAddress} 
                alt={props.info.icon}
            />
            <div
                className={styles['ForecastList__Item__temperature']}
            >
                {props.info.temperature} °
            </div>
        </div>
    );
}

export default ForecastListItem;