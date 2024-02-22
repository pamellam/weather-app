import {  useState } from 'react';
import './App.css';
import CurrentWeather from './components/current-weather/CurrentWeather';
import Search from './components/search/Search';
import Forecast from './components/forecast/Forecast';

import {
  WEATHER_API_KEY,
  WEATHER_API_URL,
  WEATHER_API_URL_FORECAST,
} from './api';

/**
 * React functional component for the main application
 *
 * @function App
 * @returns {JSX.Element}
 */
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  /**
   * Callback function for when the search input changes
   *
   * @function handleOnSearchChange
   * @param {Object} searchData The search input data
   * @param {string} searchData.value The search input value
   * @param {string} searchData.label The search input label
   */
  function handleOnSearchChange(searchData) {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL_FORECAST}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  }


  return (
    <>
      <div className="container"></div>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </>
  );
}

export default App;
