import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import type { QueryClientConfig } from 'react-query';

type QueryProviderWrapperProps = {
  children: React.ReactNode;
};

export const createQueryProviderWrapper = (config: QueryClientConfig = {}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    ...config,
  });

  const QueryComponent = ({ children }: QueryProviderWrapperProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
  };

  return QueryComponent;
};
