import { ThemeToggle } from '@/components/theme-toggle';

export const Header = () => (
  <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between border-b border-border p-4'>
    <h1 className='text-3xl font-bold'>Wonderlink</h1>
    <ThemeToggle />
  </div>
);
