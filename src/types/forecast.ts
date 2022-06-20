import { City } from './city';
import { ForecastValue } from './forecast-value';

export type Forecast = {
  city: City;
  updatedAt: Date;
  now: ForecastValue;
  nextDays: ForecastValue[];
};
