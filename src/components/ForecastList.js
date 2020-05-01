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
            // isLoading: true,

            // city:this.props.city,
        }
    }

    async componentDidMount() {
        // const response = await (await fetch(proxyurl + api));
        // const forecastData = response.json().then((value) => { console.log(value) });
        // const response = await (await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_key}&units=metric`)).json();
        this.setState({
            
            // isLoading: false
        })
        // console.log(response);
    }

    render() {
        const { items, isLoading } = this.props;
        return (<>
            <ul className='card--details--container--list '>
                {!isLoading && items.map((item, index) => <li key={index}><ForecastItem {...item} /></li>)}
            </ul>
        </>);
    }
}