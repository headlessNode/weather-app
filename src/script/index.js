import '../style/style.css';
import searchFormSubmit from './eventHandling';
import { createInitialPage, initialPageLoader, removeInitialPageLoader } from './dom';
import getWeatherData from './getWeatherInfo';

const defaultLocation = 'London';
initialPageLoader();
getWeatherData(defaultLocation).then((weatherInfo) => {
  removeInitialPageLoader();
  createInitialPage(weatherInfo);
}).then(() => {
  const searchForm = document.querySelector('.search-container');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchFormSubmit();
  });
});
