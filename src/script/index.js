import '../style/style.css';
import searchFormSubmit from './eventHandling';
import { createInitialPage } from './dom';
import getWeatherData from './getWeatherInfo';

const defaultLocation = 'London';
getWeatherData(defaultLocation).then((weatherInfo) => {
  createInitialPage(weatherInfo);
}).then(() => {
  const submitBtn = document.querySelector('.search-btn');
  submitBtn.addEventListener('click', searchFormSubmit);
});
