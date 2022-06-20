import { Card, CardContent, Stack, Typography } from '@mui/material';

import { CityForecast } from '../types/city-forecast';

const ForecastCard: React.FC<{ forecast: CityForecast }> = ({ forecast }) => {
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Stack direction="column" alignItems="center">
          <Typography color="text.secondary">{forecast.cityName}</Typography>
          <Typography variant="h5">{forecast.now}</Typography>
          <Stack direction="row">
            {forecast.nextDays.length > 0 &&
              forecast.nextDays.map((f) => (
                <Typography sx={{ m: 1 }} key={f.epoch} variant="caption" color="text.secondary">
                  {f.value}
                </Typography>
              ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
