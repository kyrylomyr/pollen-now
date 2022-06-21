import { Stack } from '@mui/material';

import CitiesContextProvider from '../contexts/cities-context';
import ForecastContextProvider from '../contexts/forecast-context';

const Dashboard: React.FC = () => {
  return (
    <CitiesContextProvider>
      <ForecastContextProvider>
        <Stack />
      </ForecastContextProvider>
    </CitiesContextProvider>
  );
};

export default Dashboard;
