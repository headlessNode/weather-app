import getWeatherData from './getWeatherInfo';
import { createWeatherCard, invalidLocation } from './dom';

function searchFormSubmit() {
  const userSearch = document.querySelector('.search-city');
  const location = userSearch.value;
  getWeatherData(location).then((response) => {
    createWeatherCard(response);
  }, (err) => {
    if (err.message.includes('400')) {
      invalidLocation();
    }
  });
}

export default searchFormSubmit;
