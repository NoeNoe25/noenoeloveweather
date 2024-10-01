import React, { useState, useEffect } from "react";
import axios from "axios";
import './WeatherForecast.css';
import WeatherIcon from "./WeatherIcon";
import { InfinitySpin } from 'react-loader-spinner'

export default function WeatherForecast({ city1, city2 }) {
    let lat=city1;
    let lon =city2;
    const [forecast, setForecast] = useState(null);


    // Use useEffect to handle side effects like API calls
    useEffect(() => {
        if (lat && lon) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8402ccd9e55983fce71eeeaa1d2bd1fc&units=metric`;
            
            axios.get(apiUrl).then(handleResponse).catch(handleError);
        }
    }, [lat, lon]);  // The effect will run when lat or lon changes

    function handleResponse(response) {
        setForecast(response.data.daily);
    }

    function handleError(error) {
        console.error("Error fetching weather data:", error);
    }
    
    return (
        <div>
            <div className="row"> 
                {forecast ? (
                    forecast.slice(1,6).map((dailyForecast, index) => (
                        <div className="col" key={index}>
                            <div className="card " style={{ maxWidth: '6rem' }}>
                                <div className="card-header">{new Date(dailyForecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</div>
                                <div className="card-body text-dark">
                                    <p className="card-text">
                                        <WeatherIcon state={dailyForecast.weather[0].icon} width={50} height={50} />
                                        <strong> <span id="max"> {Math.round(dailyForecast.temp.max)}° </span> &nbsp; 
                                        <span id="min" > {Math.round(dailyForecast.temp.min)}°  </span></strong> 
                                       
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <InfinitySpin
  visible={true}
  width="200"
  color="#f0f8ff"
  ariaLabel="infinity-spin-loading"
  />
                )}
            </div>
        </div>
    );
}
