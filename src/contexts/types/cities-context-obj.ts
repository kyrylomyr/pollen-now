import { City } from './city';

export type CitiesContextObj = {
  cities: City[];
  addCity: (city: City) => void;
  removeCity: (key: string) => void;
};
