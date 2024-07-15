import React from "react";

export default function Dateformating(props){
let date = props.currentd.toDateString();
 
    return(
        <div>{date}</div>
    )
}