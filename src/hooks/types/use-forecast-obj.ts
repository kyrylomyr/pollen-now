import { GetForecastsResult } from './get-forecasts-result';

export type UseForecastObj = {
  isLoading: boolean;
  error: string;
  getForecasts: (locationKeys: string[]) => Promise<GetForecastsResult>;
};
