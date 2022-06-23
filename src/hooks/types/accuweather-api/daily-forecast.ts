import { AirAndPollen } from './air-and-polllen';

export type DailyForecast = {
  EpochDate: number;
  AirAndPollen: AirAndPollen[];
};
