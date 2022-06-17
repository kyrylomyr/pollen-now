import { Stack, Typography } from '@mui/material';

const LoginExplanation: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Typography>
        This is a free{' '}
        <a href="https://github.com/kyrylomyr/pollen-now" target="_blank" rel="noreferrer">
          open-source
        </a>{' '}
        application that works entirely in your browser and does not send information about you to any server.
      </Typography>
      <Typography>It does, however, request the forecast directly from the AccuWeather provider.</Typography>
      <Typography>
        To make it happen you must{' '}
        <a href="https://developer.accuweather.com" target="_blank" rel="noreferrer">
          register in their API
        </a>{' '}
        and provide your personal API key here. It will be saved in the cache of your browser and used for forecast
        requests.
      </Typography>
    </Stack>
  );
};

export default LoginExplanation;
