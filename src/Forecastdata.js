import React from 'react';
import axios from 'axios';
import { useState } from "react";
import Forecastday from './Forecastday';

export default function Forecastdate(props){
    const [city, setCity] = useState(props.city);
    const [fData,setFData] =useState({ firstload: false});
     
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
       <Forecastday data={fData} />
    )

}
}