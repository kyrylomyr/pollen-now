import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { City } from '../types/city';
import { Forecast } from '../types/forecast';
import { ForecastContextObj } from '../types/forecast-context-obj';

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

export const ForecastContext = createContext<ForecastContextObj>({
  cities: [],
  forecasts: [],
  addCity: () => {},
  removeCity: () => {},
  updateForecasts: () => {}
});

const ForecastContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storedCities = JSON.parse(localStorage.getItem('cities') ?? '[]') as City[];
  const [cities, setCities] = useState<City[]>(storedCities.length > 0 ? storedCities : fakeCities);

  const storedForecasts = JSON.parse(localStorage.getItem('forecasts') ?? '[]') as Forecast[];
  const [forecasts, setForecasts] = useState<Forecast[]>(storedForecasts);

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
    setCities(newCities);
    localStorage.setItem('cities', JSON.stringify(newCities));
  }, []);

  const updateForecasts = useCallback((freshForecasts: Forecast[]) => {
    setForecasts(freshForecasts);
    localStorage.setItem('forecasts', JSON.stringify(freshForecasts));
  }, []);

  const contextValue = useMemo<ForecastContextObj>(
    () => ({
      cities,
      forecasts,
      addCity,
      removeCity,
      updateForecasts
    }),
    [cities, forecasts]
  );

  return <ForecastContext.Provider value={contextValue}>{children}</ForecastContext.Provider>;
};

export default ForecastContextProvider;
