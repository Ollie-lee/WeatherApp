import React from 'react';
const name='Adelaide'
const API_key = '8ae4a4a4221168957021b5693160e4ee';
const api = `api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}`




export default class CityWeather extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: true,
            temp: 0,
        }

    }

    async componentDidMount() {
        const response =  await fetch(api);
        console.log(response);
    }

    render() {
        const{isLoading, temp} = this.state;

        return (
            <div>
                <h3>Adelaide</h3>
                {isLoading && <h2>Is Loading</h2>}
                {!isLoading && temp}
            </div>
        );
    }

}