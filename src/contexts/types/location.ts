import { Forecast } from './forecast';

export type Location = {
  locationKey: string;
  locationName: string;
  locationArea: string;
  locationCountry: string;
  forecasts: Forecast[];
};
