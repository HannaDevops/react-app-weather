import React, { useState } from 'react';
import Dateformating from './Dateformating';
 

export default function Forecastday(props){
    let fData = props.data.daily[0];
    let max = Math.round( fData.temperature.maximum );
    let min = Math.round( fData.temperature.minimum );
    let day = new Date(fData.time *1000);
    let icon =fData.condition.icon_url;
    return(
        <div className="card text-center">
            <div className="card-header">
                <Dateformating   currentd={day} format = {2} />
            </div>
            <div className="card-body">
                <img src={icon} alt="whatweather" width='40em'></img>
            </div>
            <div className="card-footer text-muted">
                {max} {min}
            </div>
        </div>
    )
}