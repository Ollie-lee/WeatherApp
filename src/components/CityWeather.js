import React from 'react';
import Unsplash from 'unsplash-js';


const name = 'Sydney';
const API_key = '8ae4a4a4221168957021b5693160e4ee';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}&units=metric`
const unsplash = new Unsplash({ accessKey: "SllxWPp-wGVqjiAS-oLIoJn44Az5rzylFc1zPtDveg8" });


export default class CityWeather extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            temp: 0,
            description: '',
        }

    }



    async componentDidMount() {
        const response = await (await fetch(api)).json();
        const { list } = response;


        this.setState({
            temp: Math.round(list[1].main.temp),
            isLoading: false,
            description: list[1].weather[0].description
        })

    }

    render() {
        const { isLoading, temp, description } = this.state;

        return (
            <div>
                <h3 className='card--main--city'>Adelaide</h3>
                {isLoading && <h2>Is Loading</h2>}
                {!isLoading && <span className='card--main--temp'>{temp + `℃`}</span>}
                <br />
                <br />
                {!isLoading && <span className='card--main--description'>{description}</span>}


            </div>
        );
    }


}