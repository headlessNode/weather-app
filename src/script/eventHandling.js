import getWeatherData from './getWeatherInfo';
import {
  createWeatherCard, invalidLocation, removeWeatherCard, addLoadingAnim, removeLoadingAnim,
} from './dom';

function searchFormSubmit() {
  const userSearch = document.querySelector('.search-city');
  const location = userSearch.value;
  removeWeatherCard();
  addLoadingAnim();
  getWeatherData(location).then((response) => {
    removeLoadingAnim();
    createWeatherCard(response);
  }, (err) => {
    if (err.message.includes('400')) {
      invalidLocation();
    }
  });
}

export default searchFormSubmit;
