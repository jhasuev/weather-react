export const requestWeather = (coords) => {
  return new Promise((resolve) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast` + 
      `?lat=${coords.latitude}&lon=${coords.longitude}` +
      `&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
    ).then(response => resolve(response.json()))
  })
}
