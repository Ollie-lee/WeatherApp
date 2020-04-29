import React from 'react';
import '../utility/css/weather-icons.min.css';

export default class ForecastItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: this.props.temp,
            description: this.props.description,
        }
    }



    render() {
        const { temp, description } = this.state;
        let icon;
        if (String(description).toString().toLowerCase().indexOf('rain') !== -1) {
            icon = 'wi wi-owm-502';
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
            <>
                <div>
                    <i className={icon}></i>
                </div>
                <div>
                    {Math.round(temp) + `℃`}
                </div>
                <div>
                    {description}
                </div>
            </>
        )
    }
}