import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

type ApiKeyContextObj = {
  apiKey: string;
  saveApiKey: (value: string) => void;
};

export const ApiKeyContext = createContext<ApiKeyContextObj>({
  apiKey: '',
  saveApiKey: () => {}
});

const ApiKeyContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const storedApiKey = localStorage.getItem('apiKey');
  const [apiKey, setApiKey] = useState<string>(storedApiKey ?? '');

  const saveApiKey = useCallback((value: string) => {
    setApiKey(value);
    localStorage.setItem('apiKey', value);
  }, []);

  const contextValue = useMemo<ApiKeyContextObj>(
    () => ({
      apiKey,
      saveApiKey
    }),
    [apiKey, saveApiKey]
  );

  return <ApiKeyContext.Provider value={contextValue}>{children}</ApiKeyContext.Provider>;
};

export default ApiKeyContextProvider;
