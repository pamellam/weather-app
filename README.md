# Weather App

This React application provides current weather information, daily and weekly forecasts for cities. The app uses the OpenWeatherMap API for weather data and WFT Geo DB API for city search functionality.

## Functionality

1. **City Search:**
   - The user can search for a city using the search bar.
   - The search is autocomplete-enabled, suggesting cities based on the user's input.

2. **Current Weather:**
   - Displays the current weather information for the selected city.
   - Provides details such as city name, weather description, temperature, feels like, wind speed, humidity, and pressure.

3. **Daily Forecast:**
   - Presents a daily forecast for the next 7 days.
   - Each day in the forecast includes an icon representing the weather, the day's name, a short description, and the minimum and maximum temperatures.

4. **Weekly Forecast:**
   - When clicking on a day in the daily forecast, it expands to reveal additional details.
   - The expanded view includes information on pressure, humidity, cloud cover, wind speed, sea level, and the feels-like temperature.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React-Select-Async-Paginate:** A flexible and feature-rich select dropdown for React.
- **React-Accessible-Accordion:** An accessible accordion component for React.
- **CSS:** Styling is done using Cascading Style Sheets.
- **JavaScript:** The application logic is implemented in JavaScript.
- **APIs:**
  - **OpenWeatherMap API:** Used for retrieving weather data.
  - **WFT Geo DB API:** Used for city search functionality.

