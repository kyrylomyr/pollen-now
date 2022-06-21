import axios from 'axios';
import { useCallback, useContext, useState } from 'react';

import { ApiKeyContext } from '../contexts/api-key-context';

import { UseForecastObj } from './types/use-forecast-obj';

export type ForecastApiResponse = {};

const useForecast = (): UseForecastObj => {
  const apiKeyCtx = useContext(ApiKeyContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const updateForecasts = useCallback(async (cityKey: string) => {
    setIsLoading(true);

    try {
      const { data } = await axios.get<ForecastApiResponse>(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKeyCtx.apiKey}&details=true`
      );
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
      } else if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    updateForecasts
  };
};

export default useForecast;
