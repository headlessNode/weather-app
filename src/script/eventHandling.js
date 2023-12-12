import getWeatherData from './getWeatherInfo';
import { createWeatherCard } from './dom';

function searchFormSubmit() {
  const userSearch = document.querySelector('.search-city');
  const location = userSearch.value;
  getWeatherData(location).then((response) => {
    createWeatherCard(response);
  });
}

export default searchFormSubmit;
