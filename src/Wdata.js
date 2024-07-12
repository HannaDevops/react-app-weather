import React from "react";
import Dateformating from './Dateformating';
 

export default function WeatherData(props){
    let cityData =props.cityd;
    return(
        
        <div className="weatherdata">
            
            <h1>{cityData.cityName}</h1>
            <ul>
                <li><Dateformating currentd={cityData.currentDay} /> </li>
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
        </div>

    )
}