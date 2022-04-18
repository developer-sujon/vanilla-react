import axios from "axios";
import React, { Component } from "react";
import Problem from "./Problem";
import WeatherCard from "./WeatherCard";

class WeatherCardTwo extends Component {
  state = {
    weatherInfo: {},
    searchTerm: "kulna",
    error: null,
  };

  getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.searchTerm}&appid=`;
      const api = `cb5629bc040e31a69f56c06c2df63b25`;

      const response = await axios.get(`${url}${api}`);
      const data = await response.data;

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      this.setState({ weatherInfo: newWeatherInfo });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  };

  componentDidMount() {
    this.getWeatherInfo();
  }

  render() {
    return (
      <div style={{ marginBottom: "200px" }}>
        <div className="wrap">
          <div className="search">
            <input
              type="search"
              placeholder="search..."
              autoFocus
              id="search"
              className="searchTerm"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />

            <button
              className="searchButton"
              type="button"
              onClick={this.getWeatherInfo}
            >
              Search
            </button>
          </div>
        </div>

        <WeatherCard {...this.state.weatherInfo} />
        {/* <Problem {...this.state.weatherInfo} /> */}
      </div>
    );
  }
}

export default WeatherCardTwo;
