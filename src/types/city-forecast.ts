export type CityForecast = {
  cityKey: string;
  cityName: string;
  now: string;
  nextDays: { value: string; epoch: number }[];
};
