import React from 'react';
import Unsplash from 'unsplash-js';
import SearchCity from './SearchCity';
import LoadingSpinner from './LoadingSpinner'
const API_key = '8ae4a4a4221168957021b5693160e4ee';


// const api = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}&units=metric`
const unsplash = new Unsplash({ accessKey: "SllxWPp-wGVqjiAS-oLIoJn44Az5rzylFc1zPtDveg8" });


export default class CityWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // city: 'Adelaide',
            isLoading: true,
            temp: 0,
            description: '',
            speed: 0,
            humidity: 0,
        }

        this.handleCitySearch = this.handleCitySearch.bind(this);


    }

    async handleCitySearch(e) {
        e.preventDefault()
        // const { city } = this.state;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=${API_key}&units=metric`;
        const response = await (await fetch(api)).json();
        
        try {
            const { list: [, { wind: { speed }, main: { temp, humidity }, weather: [{ description }] }] } = response;
            this.setState({
                temp: Math.round(temp),
                isLoading: false,
                description,
                speed,
                humidity,
            })
        } catch (error) {
            alert("please check your city name")
        }

        

    }

    async componentDidMount() {
        // const { city } = this.state;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&appid=${API_key}&units=metric`;
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


    handleChange = (e) => {
        // this.setState({
        //     city: e.target.value,
        // })
        this.props.onCityChange(e.target.value);
    }


    render() {
        const { isLoading, temp, description, speed, humidity } = this.state;
        //const city = {this.state}
        const city = this.props.city;
        if (!isLoading) {
            return (
                <div>
                    <div className='card--main--container animated  bounceIn'>
                        {isLoading && <h2>Is Loading</h2>}
                        <div className='card--main--container--left animated  bounceIn '>
                            {!isLoading && <div className='card--main--container--left--temp animated  bounceIn '>{temp + `℃`}</div>}
                            {!isLoading && <div className='card--main--container--left--description animated  bounceIn '>{description}</div>}
                            <div><span>HUMIDITY</span>
                                {!isLoading && <div className='card--main--container--left--humidity animated  bounceIn '>{humidity + `%`}</div>}
                            </div>
                            <div>
                                <span>WIND</span>
                                {!isLoading && <div className='card--main--container--left--speed animated  bounceIn '>{speed + ` KM/H`}</div>}
                            </div>

                        </div>
                        <h3 className='card--main--container--city animated  bounceIn '>{city}</h3>
                        <SearchCity onCitySearch={this.handleCitySearch} onCityChange={this.handleChange} />
                    </div>
                </div >
            );
        } else {
            return (<div>
                <LoadingSpinner />
            </div>)
        }
    }


}