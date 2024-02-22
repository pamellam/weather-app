/* eslint-disable react/prop-types */
import './Forecast.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

/**
 * Asynchronous function to load options for the search autocomplete
 *
 * @param {string} inputValue - the search input value
 * @returns {{ options: Array<{ value: string, label: string }> }} - the options to display in the autocomplete
 */
const Forecast = ({ data }) => {
  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((day, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${day.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label htmlFor="" className="day">
                    {forecastDays[idx]}
                  </label>
                  <label htmlFor="" className="description">
                    {day.weather[0].description}
                  </label>
                  <label htmlFor="" className="min-max">
                    {Math.round(day.main.temp_min)}°C /
                    {Math.round(day.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure:</label>
                  <label htmlFor="">{day.main.pressure} hPa</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Humidity:</label>
                  <label htmlFor="">{day.main.humidity} %</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="" className="">
                    Clouds:
                  </label>
                  <label htmlFor="">{day.clouds.all} %</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="" className="">
                    Wind Speed:
                  </label>
                  <label htmlFor="">{day.wind.speed} m/s</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="" className="">
                    Sea Level:
                  </label>
                  <label htmlFor="">{day.main.sea_level} m</label>
                </div>

                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels like:</label>
                  <label htmlFor="">{Math.round(day.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
