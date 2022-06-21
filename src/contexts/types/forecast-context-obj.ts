import { Forecast } from './forecast';

export type ForecastContextObj = {
  forecasts: Forecast[];
  updateForecasts: (forecasts: Forecast[]) => void;
};
