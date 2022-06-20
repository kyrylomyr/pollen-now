import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { City } from '../types/city';
import { CitiesContextObj } from '../types/cities-context-obj';

const fakeCities: City[] = [
  {
    key: '178086',
    name: 'Munich',
    area: 'Bavaria',
    country: 'Germany'
  },
  {
    key: '351409',
    name: 'Seattle',
    area: 'Washington',
    country: 'United States'
  },
  {
    key: '53286',
    name: 'Vancouver',
    area: 'British Columbia',
    country: 'Canada'
  },
  {
    key: '55488',
    name: 'Toronto',
    area: 'Ontario',
    country: 'Canada'
  },
  {
    key: '347625',
    name: 'Los Angeles',
    area: 'California',
    country: 'United States'
  }
];

export const CitiesContext = createContext<CitiesContextObj>({
  cities: [],
  addCity: () => {},
  removeCity: () => {}
});

const CitiesContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storedCitiesJson = localStorage.getItem('cities') ?? '[]';
  const storedCities = JSON.parse(storedCitiesJson) as City[];
  const [cities, setCities] = useState<City[]>(storedCities.length > 0 ? storedCities : fakeCities);

  const addCity = useCallback((newCity: City) => {
    const existingCity = cities.find((c) => c.key === newCity.key);
    if (!existingCity) {
      const newCities = [...cities, newCity];
      setCities(newCities);
      localStorage.setItem('cities', JSON.stringify(newCities));
    }
  }, []);

  const removeCity = useCallback((cityKey: string) => {
    const newCities = cities.filter((c) => c.key !== cityKey);
    if (newCities.length < cities.length) {
      setCities(newCities);
      localStorage.setItem('cities', JSON.stringify(newCities));
    }
  }, []);

  const contextValue = useMemo<CitiesContextObj>(
    () => ({
      cities,
      addCity,
      removeCity
    }),
    [cities]
  );

  return <CitiesContext.Provider value={contextValue}>{children}</CitiesContext.Provider>;
};

export default CitiesContextProvider;
