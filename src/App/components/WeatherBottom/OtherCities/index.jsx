import React from 'react';
import styles from './otherCities.module.scss';
import OtherCityBtnList from './otherCitiesBtnList'

function OtherCity ({cityArray, onOtherCitiesClick}) {
    return (
        <div className={styles.OtherCity}>
            <h2 className={styles['OtherCity__title']}>Other Cities</h2>
            <OtherCityBtnList  
                cityArray={cityArray}
                onOtherCitiesClick={onOtherCitiesClick}
            />
        </div>
    );
}

export default OtherCity;