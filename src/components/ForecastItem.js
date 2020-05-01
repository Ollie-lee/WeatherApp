import React from 'react';
import '../utility/css/weather-icons.min.css';
import { useSpring, animated } from 'react-spring'

export default function ForecastItem(props) {
    const { number, height } = useSpring({
        from: {
            number: props.temp,
            height: 30,
            xyz: [0, 0, 0]
        },
        number: props.temp,
        height: Math.abs((props.temp / 30) * 60),
    })




    const { temp, description } = props;
    let icon;
    if (String(description).toString().toLowerCase().indexOf('rain') !== -1) {
        icon = 'wi wi-showers';
    } else if (String(description).toString().indexOf('cloud') !== -1) {
        icon = 'wi wi-owm-804';
    } else if (String(description).toString().toLowerCase().indexOf('sun') !== -1) {
        icon = 'wi wi-owm-800';
    } else if (String(description).toString().toLowerCase().indexOf('snow') !== -1) {
        icon = 'wi wi-owm-621';
    } else if (String(description).toString().toLowerCase().indexOf('thunder') !== -1) {
        icon = 'wi wi-owm-202';
    } else if (String(description).toString().toLowerCase().indexOf('clear') !== -1) {
        icon = 'wi wi-day-light-wind'
    } else {
        icon = 'wi wi-day-cloudy';
    }
    return (
        <div>
            <div>

                <i className={`${icon} card--details--container--list--icon`}></i>
            </div>
            <div>
                {/* {Math.round(temp) + `℃`} */}
                <animated.span>{number.interpolate(x => x.toFixed(0))}</animated.span>
                <span>℃</span>
                {/* <animated.span>{Math.round(temp) + `℃`}</animated.span> */}
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}
