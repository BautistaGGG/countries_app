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
  
  //Pasando Objectos de la API a Array para poder displayear la info correctamente
  const nativeNameDelPais = country !== null && Object.values(country.name.nativeName).map(nombreNativo => nombreNativo.official)[0]
  const monedaDelPais = country !== null && Object.values(country.currencies).map(moneda => moneda.name)
  const languagesDelPais = country !== null && Object.values(country.languages).map(lan => lan)

  if (!country) {
    return  <main className='container mx-auto'> 
              <h2 className='text-center text-2xl font-bold my-4'>
                Loading...
              </h2>
            </main>;
  }

  return (
    <main className='container mx-auto'>
      <a href='/' className='inline-block ml-8 md:ml-0 my-10 border border-gray-00 py-2 px-12 rounded shadow-xl'>
        <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        <p className='inline ml-2'>
          Back
        </p>
      </a>

      <section className='flex flex-col md:grid md:grid-cols-2 p-8 md:p-0'> 
        <img src={country.flags.svg} alt={country.name.common} />
        <article className='ml-0 md:ml-12 text-TextoDarkBlue'>
          <h1 className='text-3xl font-bold mt-6 md:mt-auto'>
            {country.name.common}
          </h1>

          <ul className='my-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
            <div>
              <li className='list-none'>
                <p>
                  <span className='font-bold pr-2'>Native name:</span> 
                  {nativeNameDelPais}
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
                {country.tld}
                </p>
              </li>
              <li className='list-none'>
                <p>
                <span className='font-bold pr-2'>Currencies:</span> 
                  {monedaDelPais}
                </p>
              </li>
              <li className='list-none'>
                <p>
                  <span className='font-bold pr-2'>Languages:</span> 
                  {languagesDelPais.length > 1 ? languagesDelPais.join(" - ") : languagesDelPais}
                </p>
              </li>
            </div>
          </ul>

          {country.borders &&

          <ul className='flex flex-wrap md:flex-row md:flex-wrap gap-4 list-none'>
            <h2 className='font-bold'>
              Border countries:
            </h2>
            {country.borders.map((borderCountry) => (
              <li key={borderCountry}>
                <a 
                  href={`/country/${borderCountry}`} 
                  className='p-2 px-6 border border-gray-100 rounded shadow-lg'
                >
                  {borderCountry}
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