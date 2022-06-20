import { Stack } from '@mui/material';

import ForecastCard from '../components/forecast-card';

import { CityForecast } from '../types/city-forecast';

const fakeForecast: CityForecast[] = [
  {
    cityKey: '178086',
    cityName: 'Munich',
    now: 'Extreme',
    nextDays: [
      { value: 'Extreme', epoch: 1 },
      { value: 'Very High', epoch: 2 },
      { value: 'Low', epoch: 3 },
      { value: 'Extreme', epoch: 4 },
      { value: 'High', epoch: 5 }
    ]
  },
  {
    cityKey: '351409',
    cityName: 'Seattle',
    now: 'Very High',
    nextDays: [
      { value: 'Extreme', epoch: 1 },
      { value: 'Very High', epoch: 2 },
      { value: 'Low', epoch: 3 },
      { value: 'Extreme', epoch: 4 },
      { value: 'High', epoch: 5 }
    ]
  },
  {
    cityKey: '53286',
    cityName: 'Vancouver',
    now: 'High',
    nextDays: [
      { value: 'Extreme', epoch: 1 },
      { value: 'Very High', epoch: 2 },
      { value: 'Low', epoch: 3 },
      { value: 'Extreme', epoch: 4 },
      { value: 'High', epoch: 5 }
    ]
  },
  {
    cityKey: '55488',
    cityName: 'Toronto',
    now: 'Moderate',
    nextDays: [
      { value: 'Extreme', epoch: 1 },
      { value: 'Very High', epoch: 2 },
      { value: 'Low', epoch: 3 },
      { value: 'Extreme', epoch: 4 },
      { value: 'High', epoch: 5 }
    ]
  },
  {
    cityKey: '347625',
    cityName: 'Los Angeles',
    now: 'Low',
    nextDays: [
      { value: 'Extreme', epoch: 1 },
      { value: 'Very High', epoch: 2 },
      { value: 'Low', epoch: 3 },
      { value: 'Extreme', epoch: 4 },
      { value: 'High', epoch: 5 }
    ]
  }
];

const Dashboard: React.FC = () => {
  return (
    <Stack>
      {fakeForecast.map((f) => (
        <ForecastCard key={f.cityKey} forecast={f} />
      ))}
    </Stack>
  );
};

export default Dashboard;
