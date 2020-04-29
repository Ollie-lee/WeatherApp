import React from 'react';
import CityWeather from './CityWeather';
import Time from './Time';
import ForecastList from './ForecastList';

const Main = () => {
    return (
        <main>
            <div className='card'>
                <div className='card--main'>
                    <CityWeather />
                </div>
                <div className='card--details'>
                    <div className='card--details--container'>
                        <Time />
                        <ForecastList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;