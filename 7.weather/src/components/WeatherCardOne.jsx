import axios from "axios";
import React, { Component } from "react";
import WeatherCard from "./WeatherCard";

class WeatherCardOne extends Component {
  state = {
    weatherInfo: {},
    latitude: "23.777176",
    longitude: "90.399452",
    error: null,
  };

  getWeatherInfo = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=`;
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
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        () => this.getWeatherInfo(),
      );
    });
  }

  render() {
    return (
      <>
        {Object.keys(this.state.weatherInfo).length > 0 ? (
          <WeatherCard {...this.state.weatherInfo} />
        ) : (
          <h1>Please select Your Location</h1>
        )}
        {/* <Problem {...this.state.weatherInfo} /> */}
      </>
    );
  }
}

export default WeatherCardOne;
