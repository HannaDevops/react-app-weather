import React from "react";
 

export default function Dateformating(props){
    let date = props.currentd;
    let formatdates = props.format;
    let fdate = null;
   
    switch (formatdates){
    
    case 1 : fdate = Intl.DateTimeFormat('en-GB').format(date) 
        break;
    case 2 : fdate = Intl.DateTimeFormat('en-GB',{weekday: 'short'}).format(date)
        break;
        default: fdate = Intl.DateTimeFormat('en-GB').format(date) 
    }


        return(
            <div>{fdate}</div>
        )
}