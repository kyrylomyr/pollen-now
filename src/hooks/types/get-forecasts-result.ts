import { Forecast } from '../../contexts/types/forecast';

export type GetForecastsResult = {
  [locationKey: string]: Forecast[];
};
