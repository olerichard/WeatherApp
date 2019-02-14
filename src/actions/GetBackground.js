import Unsplash, { toJson } from 'unsplash-js';
import DefaultBackground from './../default.jpg';

export default async function GetBackground(weather) {

  if (weather === null || weather === undefined)
    return "default"

  const weatherKey = weather.weather[0].id === 800 ? "800" : String(weather.weather[0].id)[0];


  const unsplash = new Unsplash({
    applicationId: process.env.REACT_APP_UNSPLASH_APPID,
    secret: process.env.REACT_APP_UNSPLASH_SECRET,
    callbackUrl: ""
  });

  return await unsplash.collections.getCollection(collections[weatherKey])
    .then(toJson)
    .then((c) => c.preview_photos[(Math.floor(Math.random() * Math.floor(c.total_photos)))].urls.raw)
    .catch(() => DefaultBackground)

}

const collections = {
  "2": "3843207", //Thunderstorm
  "3": "3843207", //Drizzle
  "5": "3843207", //Rain
  "6": "3843217", //Snow 
  "7": "3833597", //Atmosphere or foggy
  "800": "3843228", //Clear
  "8": "3833597" // CLouds
}