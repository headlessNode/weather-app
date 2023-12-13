import Image from '../images/sky.png';

export function createInitialPage() {
  const wrapper = document.querySelector('.wrapper');

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'img-container');

  const img = document.createElement('img');
  img.setAttribute('src', Image);
  img.setAttribute('class', 'mountain');

  imageContainer.appendChild(img);

  const weatherCardContainer = document.createElement('div');
  weatherCardContainer.setAttribute('class', 'card-container');

  const searchContainer = document.createElement('div');
  searchContainer.setAttribute('class', 'search-container');

  const userSearch = document.createElement('input');
  userSearch.setAttribute('type', 'text');
  userSearch.setAttribute('name', 'search-city');
  userSearch.setAttribute('id', 'search-city');
  userSearch.setAttribute('class', 'search-city');
  userSearch.setAttribute('placeholder', 'Enter city name');
  const searchBtn = document.createElement('button');
  searchBtn.setAttribute('class', 'search-btn');
  searchBtn.innerHTML = '<svg class="search-icon" width="100%" height="100%" viewBox="-3.2 -3.2 38.4 38.4" xmlns="http://www.w3.org/2000/svg"><path d="M13.46 24.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2Zm18.228 5.8-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87C26.92 5.93 20.894 0 13.46 0 6.026 0 0 5.93 0 13.25c0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 0 0 8.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44Z" fill="#000" fill-rule="evenodd"/></svg>';

  searchContainer.appendChild(userSearch);
  searchContainer.appendChild(searchBtn);
  weatherCardContainer.appendChild(searchContainer);

  wrapper.appendChild(imageContainer);
  wrapper.appendChild(weatherCardContainer);
}

function addCurrentWeatherDetails(weatherInfo) {
  const temperature = document.createElement('div');
  temperature.setAttribute('class', 'temperature');
  const degreeSign = '\u00B0';
  temperature.textContent = `${weatherInfo.currentWeather.temperature.tempC}${degreeSign}C`;
  const weather = document.createElement('div');
  weather.setAttribute('class', 'weather');
  weather.textContent = weatherInfo.currentWeather.condition;

  const region = document.createElement('div');
  region.setAttribute('class', 'region');
  region.textContent = `${weatherInfo.region.city}, ${weatherInfo.region.country}`;

  const currentDay = document.createElement('div');
  currentDay.setAttribute('class', 'current-day');
  currentDay.textContent = `${weatherInfo.region.localDay}, ${weatherInfo.region.localDate}`;

  return {
    temperature, weather, region, currentDay,
  };
}

function addForecastDetails(weatherInfo) {
  const degreeSign = '\u00B0';
  const tomorrowForecast = document.createElement('div');
  tomorrowForecast.setAttribute('class', 'tomorrow-forecast');
  const tomorrowDay = document.createElement('div');
  tomorrowDay.setAttribute('class', 'tomorrow-day');
  tomorrowDay.textContent = weatherInfo.forecast.tomorrow.day;
  const tomorrowTemp = document.createElement('div');
  tomorrowTemp.setAttribute('class', 'tomorrow-temp');
  tomorrowTemp.textContent = `${weatherInfo.forecast.tomorrow.maxTemp}${degreeSign}C`;
  const tomorrowDate = document.createElement('div');
  tomorrowDate.setAttribute('class', 'tomorrow-date');
  tomorrowDate.textContent = weatherInfo.forecast.tomorrow.date;
  const tomorrowCondition = document.createElement('div');
  tomorrowCondition.setAttribute('class', 'tomorrow-condition');
  tomorrowCondition.textContent = weatherInfo.forecast.tomorrow.condition.text;

  tomorrowForecast.appendChild(tomorrowDay);
  tomorrowForecast.appendChild(tomorrowTemp);
  tomorrowForecast.appendChild(tomorrowDate);
  tomorrowForecast.appendChild(tomorrowCondition);

  const dayAfterTomorrow = document.createElement('div');
  dayAfterTomorrow.setAttribute('class', 'after-tomorrow');
  const afterTomorrowDay = document.createElement('div');
  afterTomorrowDay.setAttribute('class', 'after-tomorrow-day');
  afterTomorrowDay.textContent = weatherInfo.forecast.dayAfterTomorrow.day;
  const afterTomorrowTemp = document.createElement('div');
  afterTomorrowTemp.setAttribute('class', 'after-tomorrow-temp');
  afterTomorrowTemp.textContent = `${weatherInfo.forecast.dayAfterTomorrow.maxTemp}${degreeSign}C`;
  const afterTomorrowDate = document.createElement('div');
  afterTomorrowDate.setAttribute('class', 'after-tomorrow-date');
  afterTomorrowDate.textContent = weatherInfo.forecast.dayAfterTomorrow.date;
  const afterTomorrowCondition = document.createElement('div');
  afterTomorrowCondition.setAttribute('class', 'after-tomorrow-condition');
  afterTomorrowCondition.textContent = weatherInfo.forecast.dayAfterTomorrow.condition.text;

  dayAfterTomorrow.appendChild(afterTomorrowDay);
  dayAfterTomorrow.appendChild(afterTomorrowTemp);
  dayAfterTomorrow.appendChild(afterTomorrowDate);
  dayAfterTomorrow.appendChild(afterTomorrowCondition);

  return { tomorrowForecast, dayAfterTomorrow };
}

function removeWeatherCard() {
  const weatherCardContainer = document.querySelector('.card-container');
  if (weatherCardContainer.classList.contains('card-present')) {
    weatherCardContainer.classList.toggle('card-present');
    const weatherCard = document.querySelector('.weather-card');
    weatherCardContainer.removeChild(weatherCard);
  }
}

export function createWeatherCard(weatherInfo) {
  console.log(weatherInfo);
  removeWeatherCard();

  const weatherCardContainer = document.querySelector('.card-container');
  weatherCardContainer.classList.toggle('card-present');
  const weatherCard = document.createElement('div');
  weatherCard.setAttribute('class', 'weather-card');

  const currentWeatherDetails = addCurrentWeatherDetails(weatherInfo);

  // const weatherIcon = document.createElement('div');
  // weatherIcon.setAttribute('class', 'weather-icon');
  const forecastDetails = document.createElement('div');
  forecastDetails.setAttribute('class', 'forecast-details');
  const forecast = addForecastDetails(weatherInfo);

  forecastDetails.appendChild(forecast.tomorrowForecast);
  forecastDetails.appendChild(forecast.dayAfterTomorrow);

  weatherCard.appendChild(currentWeatherDetails.temperature);
  weatherCard.appendChild(currentWeatherDetails.weather);
  weatherCard.appendChild(currentWeatherDetails.region);
  weatherCard.appendChild(currentWeatherDetails.currentDay);
  weatherCard.appendChild(forecastDetails);

  weatherCardContainer.appendChild(weatherCard);
}
