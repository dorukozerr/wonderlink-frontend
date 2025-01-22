import { ViewState } from '@/types';
import { useViewStateStore } from '@/store/use-view-state-store';
import { useFilterStore } from '@/store/use-filter-store';
import { viewStates } from '@/lib/constants';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const { viewState, changeViewState } = useViewStateStore();
  const resetFilters = useFilterStore((state) => state.resetFilters);

  return (
    <header className='mx-auto flex w-full max-w-[1440px] items-center justify-start gap-4 border-b border-border p-4'>
      <h1 className='text-3xl font-bold'>Wonderlink Analytics</h1>
      <span className='flex-1' />
      {viewStates.map((state, index) => (
        <Button
          key={`viewStateLink-${index}`}
          variant={viewState === state ? 'default' : 'outline'}
          className='hidden capitalize lg:flex'
          onClick={() => {
            resetFilters();
            changeViewState(state as ViewState);
          }}
        >
          {state.replace(/([A-Z])/g, ' $1').trim()}
        </Button>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='flex capitalize lg:hidden'>
            {viewState.replace(/([A-Z])/g, ' $1').trim()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {viewStates.map((state, index) => (
            <DropdownMenuItem
              key={`platformFilterOption-${index}`}
              className='capitalize'
              onClick={() => {
                resetFilters();
                changeViewState(state as ViewState);
              }}
            >
              {state.replace(/([A-Z])/g, ' $1').trim()}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
    </header>
  );
};
