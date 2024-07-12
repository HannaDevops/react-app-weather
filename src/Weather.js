import React from "react";
import axios from "axios";
import './weather.css';
import Wdata from './Wdata';
import { useState } from "react";




export default function Weather(props){
 const [cityData,setCityData] =useState({ firstload: false});
 

    function handleResponse(response){
        setCityData({
          firstload: true,
          cityName:  response.data.city,
          currentDay: new Date(response.data.time * 1000),
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

} else {return(
    <Wdata cityd={cityData} />)
}
}