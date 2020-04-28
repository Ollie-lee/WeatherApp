import React from 'react';
import CityWeather from './CityWeather';
import Time from './Time';

const Main = () => {
    return (
        <main>
            <div className='card'>
                <div className='card--main'>
                    <CityWeather />
                </div>
                <div className='card--details'>
                    <div className='card--details--left'>
                        <Time />
                    </div>
                    <div className='card--details--right'>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;