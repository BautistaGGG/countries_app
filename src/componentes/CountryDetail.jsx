/* eslint-disable no-inner-declarations */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (alpha3Code) {
      async function fetchData() {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`);
        const data = await response.json();
        setCountry(data[0]);
      }
      fetchData();
    }
  }, [alpha3Code]);

  if (!country) {
    return  <main className='container mx-auto'> 
              <h2>Loading...</h2>
            </main>;
  }

  return (
    <main className='container mx-auto'>
      <div className='my-10'>
        <a href='/' className='border border-gray-300 py-2 px-12 rounded-lg'>
          Back
        </a>
      </div>

      <section className='grid grid-cols-2'> 
        <img src={country.flags.svg} alt={country.name.common} />
        <article className='ml-12'>
          <h1 className='text-3xl font-bold'>
            {country.name.common}
          </h1>

          <ul className='my-6 flex justify-between'>
            <div>
              <li className='list-none'>
                <p>
                  <span className='font-bold'>Native name:</span> 
                  {/* {country.name.nativeName} */}
                </p>
              </li>
              <li className='list-none'>
                <p>
                  <span className='font-bold pr-2'>Population:</span> 
                  {country.population}
                </p>
              </li>
              <li className='list-none'>
                <p>
                  <span className='font-bold pr-2'>Region:</span> 
                  {country.region}
                </p>
              </li>
              <li className='list-none'>
                <p>
                  <span className='font-bold pr-2'>Sub Region:</span> 
                  {country.subregion}
                </p>
              </li>
              <li className='list-none'>
                <p>
                <span className='font-bold pr-2'>Capital:</span> 
                {country.capital && country.capital[0]}
                </p>
              </li>
            </div>

            <div>
              <li className='list-none'>
                <p>
                <span className='font-bold pr-2'>Top Level Domain:</span> 
                {country.capital && country.capital[0]}
                </p>
              </li>
              <li className='list-none'>
                <p>
                <span className='font-bold pr-2'>Currencies:</span> 
                {country.currencies[0]}
                </p>
              </li>
              <li className='list-none'>
                <p>
                <span className='font-bold pr-2'>Languages:</span> 
                {/* {country.languages.map(lang => lang.name).join(', ')} */}
                </p>
              </li>
            </div>
          </ul>

          {country.borders &&

          <ul className='flex flex-wrap gap-4 list-none'>
            <h2 className='font-bold'>
              Border countries:
              </h2>
            {country.borders.map((borderCode) => (
              <li key={borderCode}>
                <a 
                  href={`/country/${borderCode}`} 
                  className='border border-gray-300 p-2 px-4'
                >
                  {borderCode}
                </a>
              </li>
            ))}
          </ul>
          
          }
        </article>
      </section>
    </main>
  );
}

export default CountryDetail