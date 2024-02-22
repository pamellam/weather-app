import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api.js';

/**
 * React component for searching for cities
 *
 * @param {function} onSearchChange - function to call when the search value changes
 */
// eslint-disable-next-line react/prop-types
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  /**
   * Callback function for when the search value changes
   *
   * @param {object} searchData - the new search value
   */
  function handleOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  /**
   * Asynchronous function to load options for the search autocomplete
   *
   * @param {string} inputValue - the search input value
   * @returns {{ options: Array<{ value: string, label: string }> }} - the options to display in the autocomplete
   */
  const loadOptions = async (inputValue) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=100&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const response_1 = await response.json();
    return {
      options: response_1.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
