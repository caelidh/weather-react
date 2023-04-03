import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            wind:response.data.wind.speed,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            date: new Date(response.data.dt * 1000),

        });
    }
    
function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event) {
    setCity(event.target.value);
}   

function search() {
        const apiKey = "717511f5e1c0dbfc617f361ab073e2e9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
return (
    <div className="Weather">
        <form onSumbit={handleSubmit}> 
            <div className="row">  
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
       </div>
       </div> 
       </form>
       <WeatherInfo data={weatherData} />
    </div>
);
} else {
    search();
return "Loading...";
}
}