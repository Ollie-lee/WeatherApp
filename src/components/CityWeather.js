import React from 'react';
import Unsplash from 'unsplash-js';
import SearchCity from './SearchCity';
import LoadingSpinner from './LoadingSpinner'
import { useSpring, animated } from 'react-spring'


// const api = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${API_key}&units=metric`
// const unsplash = new Unsplash({ accessKey: "SllxWPp-wGVqjiAS-oLIoJn44Az5rzylFc1zPtDveg8" });


export default function CityWeather(props) {

    const { number, height } = useSpring({
        from: {
            number: props.temp,
            height: 30,
            xyz: [0, 0, 0]
        },
        number: props.temp,
        height: Math.abs((props.temp / 30) * 60),
    })




    const { isLoading, temp, description, speed, humidity, city } = props;
    // //const city = {this.state}
    // const city = this.props.city;
    if (!isLoading) {
        return (
            <div>
                <div className='card--main--container animated  bounceIn'>
                    {isLoading && <h2>Is Loading</h2>}
                    <div className='card--main--container--left animated  bounceIn '>
                        {/* {!isLoading && <div className='card--main--container--left--temp animated  bounceIn '>{temp + `℃`}</div>} */}
                        <div>
                            <animated.span className='card--main--container--left--temp animated  bounceIn '>{number.interpolate(x => x.toFixed(0))}</animated.span>
                            <span className='card--main--container--left--temp animated  bounceIn '>℃</span>
                        </div>
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
                    <SearchCity onCitySearch={props.onCitySearch} onCityChange={props.onCityChange} />
                </div>
            </div >
        );
    } else {
        return (<div>
            <LoadingSpinner />
        </div>)
    }
}


