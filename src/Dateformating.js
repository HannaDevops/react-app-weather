import React from "react";

export default function Dateformating(props){
let date = props.currentd.toDateString();
console.log(date);
    return(
        
<div>{date}</div>
    )
}