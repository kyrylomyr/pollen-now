import { Card, CardContent, Stack, Typography } from '@mui/material';

import { Forecast } from '../contexts/types/forecast';

const ForecastCard: React.FC<{ forecast: Forecast }> = ({ forecast }) => {
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Stack direction="column" alignItems="center">
          <Typography color="text.secondary">{forecast.city.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {forecast.city.area ? `${forecast.city.area}, ${forecast.city.country}` : forecast.city.country}
          </Typography>
          <Typography variant="h5">{forecast.now.value}</Typography>
          <Stack direction="row">
            {forecast.nextDays.length > 0 &&
              forecast.nextDays.map((f) => (
                <Typography sx={{ m: 1 }} key={f.timestamp} variant="caption" color="text.secondary">
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
