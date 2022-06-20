import { City } from './city';
import { Forecast } from './forecast';

export type ForecastContextObj = {
  cities: City[];
  forecasts: Forecast[];
  addCity: (city: City) => void;
  removeCity: (key: string) => void;
  updateForecasts: (forecasts: Forecast[]) => void;
};
