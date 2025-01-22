import { ThemeToggle } from '@/components/theme-toggle';
import { ViewState } from '@/types';
import { useViewStateStore } from '@/store/use-view-state-store';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { viewState, changeViewState } = useViewStateStore();

  return (
    <header className='mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 border-b border-border p-4'>
      <h1 className='text-3xl font-bold'>Wonderlink Analytics</h1>
      <span className='flex-1' />
      {['consecutive', 'country', 'dailyUsage', 'platform', 'retention'].map(
        (state, index) => (
          <Button
            key={`viewStateLink-${index}`}
            variant={viewState === state ? 'default' : 'outline'}
            className='capitalize'
            onClick={() => changeViewState(state as ViewState)}
          >
            {state.replace(/([A-Z])/g, ' $1').trim()}
          </Button>
        )
      )}
      <ThemeToggle />
    </header>
  );
};
