import React from "react";
import Dateformating from './Dateformating';
import Forecastdata from './Forecastdata';


 

export default function WeatherData(props){
    let cityData =props.cityd;
    return(
        
        <div className="wdata">
            
            <h1>{cityData.cityName}</h1>
            <ul>
                <li><Dateformating currentd={cityData.currentDay} format={1} /> </li>
                <li>{cityData.Cloudy}</li>
            </ul>
             
            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                    <div><img src={cityData.imageW} alt="whatweather" width='120em'></img></div>
                    <div className="temper">{Math.round(cityData.temper)} °C</div>
                    </div>
                </div>
                <div className="col-6">
                    <li>Precipitation: {cityData.Precipitation} %</li>
                    <li>Humidity: {cityData.Humidity} %</li>
                    <li>Wind: {cityData.Wind} km/h</li>
                </div>
            </div> 
            <Forecastdata city={cityData.cityName}/>
        </div>

    )
}