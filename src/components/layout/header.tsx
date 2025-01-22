import { MenuIcon, Moon, Sun } from 'lucide-react';

import { ViewState } from '@/types';
import { useTheme } from '@/components/theme-provider';
import { useViewStateStore } from '@/store/use-view-state-store';
import { useFilterStore } from '@/store/use-filter-store';
import { viewStates, themeOptions } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const { setTheme } = useTheme();
  const { viewState, changeViewState } = useViewStateStore();
  const resetFilters = useFilterStore((state) => state.resetFilters);

  return (
    <header className='mx-auto flex w-full max-w-[1440px] items-center justify-start gap-4 border-b border-border p-4'>
      <h1 className='text-xl font-bold md:text-3xl'>Wonderlink Analytics</h1>
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
          <Button
            variant='outline'
            className='hidden capitalize md:flex lg:hidden'
          >
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon' className='hidden md:flex'>
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {themeOptions.map((option, index) => (
            <DropdownMenuItem
              key={`desktopThemeToggler-${index}`}
              onClick={() => setTheme(option)}
              className='capitalize'
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon' className='flex md:hidden'>
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end'>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
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
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {themeOptions.map((option, index) => (
                    <DropdownMenuItem
                      key={`mobileThemeToggler-${index}`}
                      onClick={() => setTheme(option)}
                      className='capitalize'
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
