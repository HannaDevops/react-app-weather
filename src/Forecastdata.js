import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import Forecastday from './Forecastday';

export default function Forecastdate(props){
    let city = props.city;
    let [fData,setFData] =useState({ firstload: false});

    useEffect(() => {
        setFData({ firstload: false});
    }, [props.city]);
     
    function handleResponse(response){
        
        setFData({
            firstload: true,
            daily:response.data.daily
        });
    }    

    function runApi(){
        const keyApi = "35af20a51228d76bt18bb4ac458c490o";
        let urlApi  =     
        `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${keyApi}&units=metric`;
        
        axios.get(urlApi).then(handleResponse);
    }

if (!fData.firstload){
    runApi();
    return(
      <h2>  Load...</h2>
    )

    } else {
       return(
       <div className="forecastdata card-group">
            {fData.daily.map(function(dailyforcast,index) {
                return(
                  <div className="" key={index}>
                    <Forecastday data={dailyforcast} />
                    </div>
                );
            })} 
        </div>
        
    )
}
}