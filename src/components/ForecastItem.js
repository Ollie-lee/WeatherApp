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
        if (description.toLowerCase().indexOf('rain') !== -1) {
            icon = 'wi wi-owm-502';
        } else if (description.toLowerCase().indexOf('cloud') !== -1) {
            icon = 'wi-owm-804';
        } else if (description.toLowerCase().indexOf('sun') !== -1) {
            icon = 'wi-owm-800';
        } else if (description.toLowerCase().indexOf('snow') !== -1) {
            icon = 'wi-owm-621';
        } else if (description.toLowerCase().indexOf('thunder') !== -1) {
            icon = 'wi-owm-202';
        } else {
            icon = 'wi wi-na';
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