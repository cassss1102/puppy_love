import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    let hour = this.state.time.getHours();
    let minute = this.state.time.getMinutes();
    let second = this.state.time.getSeconds();
    let date = this.state.time.getDate();

    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;
    second = (second < 10) ? `0${second}` : second;
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>Time: {hour}:{minute}:{second} PDT</p>

          <p>Date: {this.state.time.toDateString()}</p>
        </div>
      </div>
    );
  }
}
