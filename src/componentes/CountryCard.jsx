/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function CountryCard({ country }) {
  return (
    <main className="bg-white shadow-md rounded-md p-4">
      <h2 className="font-bold">{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </main>
  );
}

export default CountryCard;
