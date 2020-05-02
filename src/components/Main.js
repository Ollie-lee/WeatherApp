import React from 'react';
import CityWeather from './CityWeather';
import Time from './Time';
import ForecastList from './ForecastList';
import '../utility/animate.css'

const API_key = '8ae4a4a4221168957021b5693160e4ee';
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            city: 'Adelaide',
            isLoading: true,
            temp: 0,
            description: '',
            speed: 0,
            humidity: 0,
            items: [{}, {}, {}, {}, {}],
        }
        this.handleCitySearch = this.handleCitySearch.bind(this);
    }


    async componentDidMount() {
        // const { city } = this.state;
        const api = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_key}&units=metric`;
        const response = await (await fetch(api)).json();
        const { list: [, { wind: { speed }, main: { temp, humidity }, weather: [{ description }] }] } = response;


        this.setState({
            temp: Math.round(temp),
            isLoading: false,
            description,
            speed,
            humidity,
            items: [
                { temp: response.list[8].main.temp, description: response.list[8].weather[0].main },
                { temp: response.list[16].main.temp, description: response.list[16].weather[0].main },
                { temp: response.list[24].main.temp, description: response.list[24].weather[0].main },
                { temp: response.list[32].main.temp, description: response.list[32].weather[0].main },
                { temp: response.list[39].main.temp, description: response.list[39].weather[0].main },
            ],
        })
    }

    handleCityChange = (e) => {
        //axios
        this.setState({
            city: e.target.value,
        })
    }

    // handleChange = (e) => {
    //     // this.setState({
    //     //     city: e.target.value,
    //     // })
    //     this.props.onCityChange(e.target.value);
    // }

    async handleCitySearch(e) {
        e.preventDefault()
        // const { city } = this.state;
        const api = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_key}&units=metric`;
        const response = await (await fetch(api)).json();
        try {
            const { list: [, { wind: { speed }, main: { temp, humidity }, weather: [{ description }] }] } = response;
            this.setState({
                temp: Math.round(temp),
                isLoading: false,
                description,
                speed,
                humidity,
                items: [
                    { temp: response.list[8].main.temp, description: response.list[8].weather[0].main },
                    { temp: response.list[16].main.temp, description: response.list[16].weather[0].main },
                    { temp: response.list[24].main.temp, description: response.list[24].weather[0].main },
                    { temp: response.list[32].main.temp, description: response.list[32].weather[0].main },
                    { temp: response.list[39].main.temp, description: response.list[39].weather[0].main },
                ],
            })
        } catch (error) {
            alert("please check your city name")
        }
        


    }



    render() {
        // const { city } = this.state;
        return (

            <main>
                <div className='card'>
                    <div className='card--main '>
                        <CityWeather {...this.state} onCityChange={this.handleCityChange} onCitySearch={this.handleCitySearch} />
                    </div>
                    <div className='card--details animated  bounceIn'>
                        <div className='card--details--container '>
                            <Time />
                            <ForecastList {...this.state} />
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}

export default Main;