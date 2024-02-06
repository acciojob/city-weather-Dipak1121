import React from "react";

const WeatherCard = ({city, API_KEY})=>{

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const data = fetch(api)
    .then((response)=>(response.json()))
    .then((data)=>{
        console.log(data);
        console.log(data.name);
    })
    .catch(err=>{
        console.log(err);
    });

    return(
        <div className="weather">
            <h2>{data.name}</h2>
            <h1></h1>
        </div>
    )

}

export default WeatherCard;