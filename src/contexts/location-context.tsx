import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { LocationContextObj } from './types/location-context-obj';
import { Location } from './types/location';

const predefinedLocations: Location[] = [
  {
    locationKey: '178086',
    locationName: 'Munich',
    locationArea: 'Bavaria',
    locationCountry: 'Germany',
    forecasts: []
  },
  {
    locationKey: '351409',
    locationName: 'Seattle',
    locationArea: 'Washington',
    locationCountry: 'United States',
    forecasts: []
  },
  {
    locationKey: '53286',
    locationName: 'Vancouver',
    locationArea: 'British Columbia',
    locationCountry: 'Canada',
    forecasts: []
  },
  {
    locationKey: '55488',
    locationName: 'Toronto',
    locationArea: 'Ontario',
    locationCountry: 'Canada',
    forecasts: []
  },
  {
    locationKey: '347625',
    locationName: 'Los Angeles',
    locationArea: 'California',
    locationCountry: 'United States',
    forecasts: []
  }
];

const getYesterday = (): number => Date.now() - 86400000;

export const LocationContext = createContext<LocationContextObj>({
  locations: [],
  updatedAt: getYesterday(),
  saveLocations: () => {}
});

const LocationContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storedLocationsJson = localStorage.getItem('locations') ?? JSON.stringify(predefinedLocations);
  const storedLocations = JSON.parse(storedLocationsJson) as Location[];
  const [locations, setLocations] = useState<Location[]>(storedLocations);

  const storedUpdatedAtJson = localStorage.getItem('updatedAt');
  const storedUpdatedAt = storedUpdatedAtJson ? (JSON.parse(storedUpdatedAtJson) as number) : getYesterday();
  const [updatedAt, setUpdatedAt] = useState<number>(storedUpdatedAt);

  const saveLocations = useCallback((freshLocations: Location[]) => {
    setLocations(freshLocations);
    localStorage.setItem('locations', JSON.stringify(freshLocations));

    const freshUpdatedAt = Date.now();
    setUpdatedAt(freshUpdatedAt);
    localStorage.setItem('updatedAt', JSON.stringify(freshUpdatedAt));
  }, []);

  const contextValue = useMemo<LocationContextObj>(
    () => ({
      locations,
      updatedAt,
      saveLocations
    }),
    [locations]
  );

  return <LocationContext.Provider value={contextValue}>{children}</LocationContext.Provider>;
};

export default LocationContextProvider;
