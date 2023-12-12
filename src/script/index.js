import getWeatherData from './getWeatherInfo';
import '../style/style.css';

const userSearch = document.querySelector('.search-city');
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  const location = userSearch.value;
  getWeatherData(location).then((response) => {
    console.log(response);
  });
});
