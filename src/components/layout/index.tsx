import { ReactNode } from 'react';

import { Header } from '@/components/layout/header';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <main className='hidden h-full w-full flex-col items-start justify-start md:flex'>
      <Header />
      <section className='mx-auto w-full max-w-[1440px] flex-1 overflow-auto'>
        {children}
      </section>
    </main>
    <main className='flex h-full w-full items-center justify-center p-8 md:hidden'>
      <h1 className='mono scroll-m-20 text-center text-2xl font-extrabold tracking-tight'>
        PLEASE VISIT THE SITE FROM LARGER SCREEN
      </h1>
    </main>
  </>
);
