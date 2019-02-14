import axios from 'axios';

export default async function GetWeather(location) {

  if (location == null)
    return null

  return await axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${process.env.REACT_APP_OWM_APIKEY}`)
    .then((res) => res.data)
    .catch(() => console.error("Get Weather, did not get shit"))
};