import { useEffect, useState } from 'react';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    }
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter(country => {
      const nameMatches = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
      const regionMatches = !selectedRegion || country.region === selectedRegion;
      return nameMatches && regionMatches;
    });
  }

  function onChangeBusqueda(e) {
    setSearchQuery(e.target.value)
  }

  function onChangeRegion(e) {
    setSelectedRegion(e.target.value)
  }

  return (
    <main className='container mx-auto bg-lightModeBackground'>
      <section className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between my-8 px-4 md:px-0 lg:px-0'>
        <input 
          type="text" value={searchQuery} 
          onChange={onChangeBusqueda} 
          placeholder="Search for a country..." 
          className='py-3 pl-4 pr-40 border border-slate-100 rounded-lg shadow-md'
        />

        <select 
          value={selectedRegion} 
          onChange={onChangeRegion}
          className='py-3 px-5 rounded-lg shadow-xl'
        >
          <option value="">
            All regions
          </option>
          <option value="Africa" className='py-2 px-4'>
            Africa
          </option>
          <option value="Americas" className='my-2 mx-4'>
            Americas
          </option>
          <option value="Asia" className='my-2 mx-4'>
            Asia
          </option>
          <option value="Europe" className='my-2 mx-4'>
            Europe
          </option>
          <option value="Oceania" className='my-2 mx-4'>
            Oceania
          </option>
        </select>
      </section>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-0 lg:px-0'>
        {filterCountries().map(country => (
          <li key={country.cca3} className='shadow-lg rounded-lg'>
            <a href={`/country/${country.cca3}`}>
              <img 
                src={country.flags.svg} 
                alt={country.name.common + "flag"} 
              />
              <div className='p-4 text-TextoDarkBlue'>
                <h2 className='text-2xl font-bold'>
                  {country.name.common}
                </h2>
                <p className='mb-2'>
                  <span className='font-bold'>Population: </span> 
                  {country.population}
                </p>
                <p className='mb-2'>
                  <span className='font-bold'>Region: </span> 
                  {country.region}
                </p>
                <p className='mb-2'>
                  <span className='font-bold'>Capital: </span> 
                  {country.capital}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage