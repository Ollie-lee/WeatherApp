import React from 'react';
import CityWeather from './CityWeather';

const Main = () => {
    return (
        <main>
            <div className='card'>
                <div className='card--main'>
                    <CityWeather/>
                </div>
                <div className='card--details'>
                    <div className='card--details--left'>

                    </div>
                    <div className='card--details--right'>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;