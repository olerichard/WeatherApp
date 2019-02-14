import React from 'react'
import "../weather-icons/css/weather-icons.min.css"

const Weather = ({ state }) => {
  const weather = state.weather.weather[0].id === 800 ? "800" : String(state.weather.weather[0].id)[0];
  let temp = state.weather.main.temp.toString();
  if (temp.indexOf(".") >= 0)
    temp = temp.slice(0, temp.indexOf("."));

  const style = {
    fontSize: "100px",
    textAlign: "center",
    margin: "0px",
    padding: "25px",
    color: "white",
    fontFamily: "'Overpass Mono', monospace",
    WebkitTextStroke: "1px black"
  }

  const celciusIcon = {
    fontSize: "50px",
    position: "relative",
    top: "-30px",
    color: "white",
  }

  return (
    <div>
      <p style={style}> {temp}<i style={celciusIcon} className="wi wi-celsius"></i>  <i className={getIcon(weather)}></i></p>
    </div >
  )
}

function getIcon(weather) {

  switch (weather) {
    case "2": //Thunderstorm
      return "wi wi-thunderstorm"
    case "3"://Drizzle
      return "wi wi-showers"
    case "5": //Rain
      return "wi wi-rain"
    case "6": //SNow
      return "wi wi-snow"
    case "7": //Atmosphere
      return "wi wi-fog"
    case "800": //Clear
      return "wi wi-sunny"
    case "8": //Clouds
      return "wi wi-cloudy"
    default:
      return ""
  }
}

export default Weather



