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
            speed: 0,
            humidity: 0,
        }

    }



    async componentDidMount() {
        const response = await (await fetch(api)).json();
        console.log(response);
        const { list: [zero, { wind: { speed }, main: { temp, humidity }, weather: [{ description }] }] } = response;


        this.setState({
            temp: Math.round(temp),
            isLoading: false,
            description,
            speed,
            humidity,
        })

    }

    render() {
        const { isLoading, temp, description, speed, humidity } = this.state;

        return (
            <>
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
                    <h3 className='card--main--container--city'>Adelaide</h3>
                </div>
            </>
        );
    }


}