import { useCallback, useContext, useState } from 'react';
import axios from 'axios';

import { ApiKeyContext } from '../contexts/api-key-context';

import { UseForecastObj } from './types/use-forecast-obj';
import { ForecastResponse } from './types/accuweather-api/forecast-response';
import { GetForecastsResult } from './types/get-forecasts-result';
import { Forecast } from '../contexts/types/forecast';
import { AirAndPollen } from './types/accuweather-api/air-and-polllen';

const getForecastLevel = (forecast: AirAndPollen | undefined): number =>
  !forecast?.Value ? 0 : forecast.CategoryValue;

const useForecast = (): UseForecastObj => {
  const apiKeyCtx = useContext(ApiKeyContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getForecasts = useCallback(async (locationKeys: string[]): Promise<GetForecastsResult> => {
    setIsLoading(true);
    setError('');

    const result: GetForecastsResult = {};
    await Promise.all(
      locationKeys.map(async (locationKey) => {
        try {
          const { data } = await axios.get<ForecastResponse>(
            `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKeyCtx.apiKey}&details=true`
          );

          const forecasts = data.DailyForecasts.map(
            (df): Forecast => ({
              timestamp: df.EpochDate,
              level: getForecastLevel(df.AirAndPollen.find((aip) => aip.Name === 'Grass'))
            })
          );

          result[locationKey] = forecasts;
        } catch (e) {
          if (typeof e === 'string') {
            setError(e);
          } else if (e instanceof Error) {
            setError(e.message);
          } else {
            setError('Unknown error');
          }
        }
      })
    );

    setIsLoading(false);
    return result;
  }, []);

  return {
    isLoading,
    error,
    getForecasts
  };
};

export default useForecast;
