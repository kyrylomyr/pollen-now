export type UseForecastObj = {
  isLoading: boolean;
  error: string;
  updateForecasts: (cityKey: string) => Promise<void>;
};
