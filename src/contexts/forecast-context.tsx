import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { Forecast } from '../types/forecast';
import { ForecastContextObj } from '../types/forecast-context-obj';

export const ForecastContext = createContext<ForecastContextObj>({
  forecasts: [],
  updateForecasts: () => {}
});

const ForecastContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storedForecastsJson = localStorage.getItem('forecasts') ?? '[]';
  const storedForecasts = JSON.parse(storedForecastsJson) as Forecast[];
  const [forecasts, setForecasts] = useState<Forecast[]>(storedForecasts);

  const updateForecasts = useCallback((freshForecasts: Forecast[]) => {
    setForecasts(freshForecasts);
    localStorage.setItem('forecasts', JSON.stringify(freshForecasts));
  }, []);

  const contextValue = useMemo<ForecastContextObj>(
    () => ({
      forecasts,
      updateForecasts
    }),
    [forecasts]
  );

  return <ForecastContext.Provider value={contextValue}>{children}</ForecastContext.Provider>;
};

export default ForecastContextProvider;
