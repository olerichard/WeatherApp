import axios from 'axios';

export default async function GetLocation() {


  return await axios.get(`https://ipinfo.io/`)
    .then(res => res.data.city)
    .catch(() => "Stavanger")



}