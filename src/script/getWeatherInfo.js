// Write the functions that hit the API.
// You’re going to want functions that can take a location
// and return the weather data for that location. For now, just console.log() the information.

function getWeatherData(location) {
  return fetch(`https://api.weatherapi.com/v1/current.json?key=a1cd623f96c04f989fa83523230812&q=${location}`, { mode: 'cors' })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      } else {
        return res.json();
      }
    })
    .then((weatherData) => {
      const weatherInfo = {
        currentWeather: weatherData.current.condition.text,
        temperature: {
          tempC: weatherData.current.temp_c,
          tempF: weatherData.current.temp_f,
          humidity: weatherData.current.humidity,
        },
        region: {
          city: weatherData.location.name,
          country: weatherData.location.country,
        },
      };

      return weatherInfo;
    })
    .catch((err) => { throw err; });
}

export default getWeatherData;
