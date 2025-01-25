import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

import { trpc } from '@/utils/trpc';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { Layout } from '@/components/layout';
import { App } from '@/App.tsx';

const WONDERLINK_BACKEND_URL = import.meta.env.VITE_WONDERLINK_BACKEND_URL;

if (!WONDERLINK_BACKEND_URL) {
  throw new Error('env vars are not defined');
}

export const Providers = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: WONDERLINK_BACKEND_URL })]
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
