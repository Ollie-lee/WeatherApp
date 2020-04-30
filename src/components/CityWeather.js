import React from 'react';
import Unsplash from 'unsplash-js';
import SearchCity from './SearchCity';


// const name = 'Adelaide';
const API_key = '8ae4a4a4221168957021b5693160e4ee';
// const api = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}&units=metric`
const unsplash = new Unsplash({ accessKey: "SllxWPp-wGVqjiAS-oLIoJn44Az5rzylFc1zPtDveg8" });


export default class CityWeather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            temp: 0,
            description: '',
            speed: 0,
            humidity: 0,
            city: 'Adelaide',
        }

    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value,
        })
    }

    handleCitySearch = (e) => {
        const { city } = this.state;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`;
        const response = fetch(api).json();
        const { list: [, { wind: { speed }, main: { temp, humidity }, weather: [{ description }] }] } = response;


        this.setState({
            temp: Math.round(temp),
            isLoading: false,
            description,
            speed,
            humidity,
        })

    }

    async componentDidMount() {
        const { city } = this.state;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}&units=metric`;
        const response = await (await fetch(api)).json();
        const { list: [, { wind: { speed }, main: { temp, humidity }, weather: [{ description }] }] } = response;


        this.setState({
            temp: Math.round(temp),
            isLoading: false,
            description,
            speed,
            humidity,
        })
    }

    render() {
        const { isLoading, temp, description, speed, humidity, city } = this.state;

        return (
            <div>
                <div className='card--main--container'>
                    {isLoading && <h2>Is Loading</h2>}
                    <div className='card--main--container--left'>
                        {!isLoading && <div className='card--main--container--left--temp'>{temp + `℃`}</div>}
                        {!isLoading && <div className='card--main--container--left--description'>{description}</div>}
                        <div><span>HUMIDITY</span>
                            {!isLoading && <div className='card--main--container--left--humidity'>{humidity + `%`}</div>}
                        </div>
                        <div>
                            <span>WIND</span>
                            {!isLoading && <div className='card--main--container--left--speed'>{speed + ` KM/H`}</div>}
                        </div>

                    </div>
                    <h3 className='card--main--container--city'>{city}</h3>
                    <SearchCity onCitySearch={this.handleCitySearch} onCityChange={this.handleCityChange} />
                </div>
            </div >
        );
    }


}