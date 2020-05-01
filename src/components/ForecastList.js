import React from 'react';
import ForecastItem from './ForecastItem';

// const api = `https://www.metaweather.com/api/location/search/?query=adelaide`;
// const api = `https://www.metaweather.com/api/location/1099805/2020/04/25/`;
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const name = 'Adelaide';
const API_key = '8ae4a4a4221168957021b5693160e4ee';
// const api = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}&units=metric`


export default class ForecastList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: [{}, {}, {}, {}, {}],
            city:this.props.city,
        }
    }

    async componentDidMount() {
        // const response = await (await fetch(proxyurl + api));
        // const forecastData = response.json().then((value) => { console.log(value) });
        const response = await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_key}&units=metric`)).json();
        this.setState({
            items: [
                { temp: response.list[8].main.temp, description: response.list[8].weather[0].main },
                { temp: response.list[16].main.temp, description: response.list[16].weather[0].main },
                { temp: response.list[24].main.temp, description: response.list[24].weather[0].main },
                { temp: response.list[32].main.temp, description: response.list[32].weather[0].main },
                { temp: response.list[39].main.temp, description: response.list[39].weather[0].main },
            ],
            isLoading: false
        })
        console.log(response);
    }

    render() {
        const { items, isLoading } = this.state;
        return (<>
            <ul className='card--details--container--list '>
                {!isLoading && items.map((item, index) => <li key={index}><ForecastItem {...item} /></li>)}
            </ul>
        </>);
    }
}