import React from 'react';
import CityWeather from './CityWeather';
import Time from './Time';
import ForecastList from './ForecastList';
import '../utility/animate.css'
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            city: 'Adelaide',
        }
    }

    handleCityChange = (city) => {
        this.setState({
            city: city,
        })
    }






    render() {
        const { city } = this.state;
        return (

            <main>
                <div className='card'>
                    <div className='card--main '>
                        <CityWeather city={city} onCityChange={this.handleCityChange} />
                    </div>
                    <div className='card--details animated  bounceIn'>
                        <div className='card--details--container '>
                            <Time />
                            <ForecastList city={city} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}

export default Main;