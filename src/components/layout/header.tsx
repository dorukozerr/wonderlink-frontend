import { ThemeToggle } from '@/components/theme-toggle';
import { ViewState } from '@/types';
import { useViewStateStore } from '@/store/use-view-state-store';
import { viewStates } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const { viewState, changeViewState } = useViewStateStore();

  return (
    <header className='mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 border-b border-border p-4'>
      <h1 className='text-3xl font-bold'>Wonderlink Analytics</h1>
      <span className='flex-1' />
      {viewStates.map((state, index) => (
        <Button
          key={`viewStateLink-${index}`}
          variant={viewState === state ? 'default' : 'outline'}
          className='hidden capitalize lg:flex'
          onClick={() => changeViewState(state as ViewState)}
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
              onClick={() => changeViewState(state as ViewState)}
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
