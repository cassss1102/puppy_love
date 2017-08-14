import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      weather: null
    };
  }

  componentDidMount (){
    navigator.geolocation.getCurrentPosition((position) => {
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=fdc6e221dab479df4e008e9339ea0eb4`;
      return this.getWeather(url);
    });
  }

  getWeather(url) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.status >= 200 && request.readyState === XMLHttpRequest.DONE) {
      // Success!
        const data = JSON.parse(request.responseText);
        this.setState({weather: data});
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  render() {
    let content = <div></div>;
    if (this.state.weather) {
      let weather = this.state.weather;
      let temp = (weather.main.temp -273.15) * 1.8 + 32;
      content = <div>
                  <p>{weather.name}</p>
                  <p>{temp.toFixed(1)}℉</p>
                </div>;
    } else {
      content = <div className="loading">Loading...</div>;
    }
    return (
      <div>
        <h1>Weather</h1>
          <div className="weather">
            {content}
          </div>
      </div>
    );
  }
}
