import React from 'react';

const name = 'Sydney';
const API_key = '8ae4a4a4221168957021b5693160e4ee';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}&units=metric`

// const targetCity = cities.filter((city)=>city.name==='Adelaide');
// const API_key = '8ae4a4a4221168957021b5693160e4ee';
// const city = 'Adelaide';
// const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

export default class CityWeather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            temp: 0,
            description:'',
        }

    }



    async componentDidMount() {
        const response = await (await fetch(api)).json();
        console.log(response);
        const { list } = response;
        this.setState({
            temp: list[1].main.temp,
            isLoading: false,
            description: list[1].weather[0].description
        })
        
    }

    render() {
        const { isLoading, temp, description } = this.state;

        return (
            <div>
                <h3>Adelaide</h3>
                {isLoading && <h2>Is Loading</h2>}
                {!isLoading && description}
                <br/>
                {!isLoading && temp }
                
                
            </div>
        );
    }


}