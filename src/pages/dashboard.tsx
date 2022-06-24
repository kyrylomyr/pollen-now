import { useContext, useEffect, useState } from 'react';

import { LocationContext } from '../contexts/location-context';
import { Location } from '../contexts/types/location';
// import useForecast from '../hooks/use-forecast';

const updateFrequencyHours = 3;

const Dashboard: React.FC = () => {
  const locationCtx = useContext(LocationContext);
  // const { getForecasts } = useForecast();

  const [content, setContent] = useState<Location[]>(locationCtx.locations);

  useEffect(() => {
    if ((Date.now() - locationCtx.updatedAt) / 36e5 < updateFrequencyHours) {
      return;
    }

    // const locationKeys = locationCtx.locations.map((loc) => loc.locationKey);
    // getForecasts(locationKeys);

    setContent([]);
  }, []);

  return <pre>{JSON.stringify(content, null, 2)}</pre>;
};

export default Dashboard;
