import React from "react";
import axios from "axios";
import './weather.css';
import Wdata from './Wdata';
import { useState } from "react";




export default function Weather(props){
 const [cityData,setCityData] =useState({ firstload: false});
 const [city, setCity] =useState(props.defcity);

    function handleResponse(response){
        setCityData({
          firstload: true,
          cityName:  response.data.city,
          currentDay: new Date(response.data.time * 1000),
          temper: response.data.temperature.current,
          Cloudy: response.data.condition.description,
          Precipitation: Math.round(response.data.temperature.feels_like),
          Humidity: response.data.temperature.humidity,
          Wind: Math.round(response.data.wind.speed),
          imageW:response.data.condition.icon_url
        });
        
    }
 
function handleSubmit(event){
  event.preventDefault();
  runApi();
}

function handleChange(event){
  setCity(event.target.value);

}

function runApi(){
  const keyApi = "35af20a51228d76bt18bb4ac458c490o";
     
  let urlApi  =     
  `https://api.shecodes.io/weather/v1/current?query=${city}
  &key=${keyApi}&units=metric`;
  axios.get(urlApi).then(handleResponse);
}

    if (!cityData.firstload){
    runApi();
    return(
      <h2>  Load...</h2>
    )

} else {
    return(
      <div className="weather">
      <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" 
                        className="form-control"
                        onChange={handleChange}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
                </form>
    <Wdata cityd={cityData} />
    </div>)
    }
}