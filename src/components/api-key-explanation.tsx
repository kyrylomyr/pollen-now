import { Link, Stack, Typography } from '@mui/material';

const ApiKeyExplanation: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Typography>
        Welcome to the application that you will love to use to quickly get a grass polen forecast!
      </Typography>
      <Typography>
        This is a free{' '}
        <Link href="https://github.com/kyrylomyr/pollen-now" underline="none" target="_blank" rel="noreferrer">
          open-source
        </Link>{' '}
        project without ads that does not have a server and works entirely in your browser.
      </Typography>
      <Typography>
        A forecast is requested directly from the{' '}
        <Link href="https://developer.accuweather.com" underline="none" target="_blank" rel="noreferrer">
          AccuWeather API
        </Link>{' '}
        service.
      </Typography>
      <Typography>
        Please,{' '}
        <Link href="https://www.weatherbit.io/account/create" underline="none" target="_blank" rel="noreferrer">
          register a free AccuWeather user
        </Link>{' '}
        , add a new app and provide its API Key here. It will be saved in the local storage of your browser and used
        only for the forecast requests.
      </Typography>
    </Stack>
  );
};

export default ApiKeyExplanation;
