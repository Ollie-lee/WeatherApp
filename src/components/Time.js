import React from 'react';
import moment from 'moment';

export default class Time extends React.Component {
    constructor() {
        super();
        this.state = {

            hour: moment()._d.getHours(),
            min: moment()._d.getMinutes(),
            sec: moment()._d.getSeconds(),
            day: moment().format('LL'),
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({

                hour: moment()._d.getHours(),
                min: moment()._d.getMinutes(),
                sec: moment()._d.getSeconds(),
                day: moment().format('LL'),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const { hour, min, sec, day } = this.state;
        return (
            <div className='card--details--container--time'>
                <div>{day}</div>
                <div><span>{hour}</span>:<span>{min}</span>:{sec}</div>
            </div>
        )
    }
}