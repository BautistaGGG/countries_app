const API_URL = 'https://restcountries.com/v3.1/';

export const fetchCountries = async () => {
  try {
    const response = await fetch(`${API_URL}all`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

export const fetchCountryByAlpha3Code = async (alpha3Code) => {
  try {
    const response = await fetch(`${API_URL}alpha/${alpha3Code}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country:', error);
  }
};
