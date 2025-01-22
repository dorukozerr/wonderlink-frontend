import { ReactNode } from 'react';

import { Header } from '@/components/layout/header';

export const Layout = ({ children }: { children: ReactNode }) => (
  <main className='flex h-full w-full flex-col items-start justify-start'>
    <Header />
    <section className='mx-auto w-full max-w-[1440px] flex-1 overflow-auto'>
      {children}
    </section>
  </main>
);
