import React from "react";
import axios from "axios";
import './weather.css';
import { useState } from "react";

export default function Weather(props){
 const [cityData,setCityData] =useState({ firstload: false});
 

    function handleResponse(response){
        setCityData({
          firstload: true,
          cityName:  response.data.city,
          day: response.data.time,
          temper: response.data.temperature.current,
          Cloudy: response.data.condition.description,
          Precipitation: response.data.temperature.feels_like,
          Humidity: response.data.temperature.humidity,
          Wind:response.data.wind.speed,
          imageW:response.data.condition.icon_url
        });
        
    }
 

    if (!cityData.firstload){
    const keyApi = "35af20a51228d76bt18bb4ac458c490o";
    let cityName =props.defcity;
    let urlApi  =     
    `https://api.shecodes.io/weather/v1/current?query=${cityName}
    &key=${keyApi}&units=metric`;
    axios.get(urlApi).then(handleResponse);
    return(
      <h2>  Load...</h2>
    )

} else {
    return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" className="form-control"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
                </form>
            <h1>{cityData.cityName}</h1>
            <ul>
                <li>{cityData.day}</li>
                <li>{cityData.Cloudy}</li>
            </ul>
             
            <div className="row">
                <div className="col-6">
                    <img src={cityData.imageW}></img>
                    {Math.round(cityData.temper)} C
                </div>
                <div className="col-6">
                    <li>Precipitation: {cityData.Precipitation}</li>
                    <li>Humidity: {cityData.Humidity}</li>
                    <li>Wind: {cityData.Wind}</li>
                </div>
            </div> 
        </div> );
}
}