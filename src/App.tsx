import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ApiKeyContext } from './contexts/api-key-context';
import ProtectedRoute from './components/protected-route';
import Layout from './components/layout';
import ApiKey from './pages/api-key';
import Dashboard from './pages/dashboard';
import AddCity from './pages/add-city';

const App: React.FC = () => {
  const apiKeyCtx = useContext(ApiKeyContext);

  return (
    <Layout>
      <Routes>
        <Route path="/api-key" element={<ApiKey />} />
        <Route element={<ProtectedRoute isAllowed={!!apiKeyCtx.apiKey} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-city" element={<AddCity />} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
