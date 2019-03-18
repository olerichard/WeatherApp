export default async function GetLocation() {

  let location
  //Making the geolocation into a promis. 
  //Making it possible for me to return the location back and keep it in state.
  var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  await getPosition()
    .then((position) => {
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    })
    .catch((err) => {
      console.error(err.message);
    });

  return location
}