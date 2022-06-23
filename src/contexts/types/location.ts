import { Forecast } from './forecast';

export type Location = {
  locationKey: string;
  locationName: string;
  locationArea: string;
  locationCountry: string;
  updatedAt: Date;
  forecasts: Forecast[];
};
