import { Forecast } from './location';

export type ForecastContextObj = {
  forecasts: Forecast[];
  updateForecasts: (forecasts: Forecast[]) => void;
};
