import { Calendar as CalendarIcon, Filter } from 'lucide-react';

import { platforms, countries } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useFilterStore } from '@/store/use-filter-store';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

export const FilterRow = () => {
  const { filters, setFilters } = useFilterStore();

  return (
    <div className='flex h-max w-full items-center justify-end gap-2 border-b border-border p-4'>
      <h6 className='block font-bold md:hidden'>Filters</h6>
      <span className='flex flex-1 md:hidden' />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'hidden w-[300px] justify-start text-left font-normal md:flex',
              !filters.date.from && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {filters.date.from ? (
              filters.date.to ? (
                <>
                  {new Date(filters.date.from).toLocaleDateString()} -{' '}
                  {new Date(filters.date.to).toLocaleDateString()}
                </>
              ) : (
                new Date(filters.date.from).toLocaleDateString()
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={new Date()}
            selected={
              filters.date.from
                ? filters.date.to
                  ? {
                      from: new Date(filters.date.from),
                      to: new Date(filters.date.to)
                    }
                  : { from: new Date(filters.date.from), to: undefined }
                : undefined
            }
            onSelect={(newRange) =>
              newRange
                ? newRange.from
                  ? newRange.to
                    ? setFilters('date', {
                        from: newRange.from.toISOString(),
                        to: newRange.to.toISOString()
                      })
                    : setFilters('date', {
                        from: newRange.from.toISOString(),
                        to: undefined
                      })
                  : setFilters('date', {
                      from: undefined,
                      to: undefined
                    })
                : setFilters('date', {
                    from: undefined,
                    to: undefined
                  })
            }
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='hidden capitalize md:flex'>
            Platform -{' '}
            {filters.platforms.length === 0 ? 'All' : filters.platforms.length}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {platforms.map((platform, index) => (
            <DropdownMenuCheckboxItem
              key={`platformFilterOption-${index}`}
              checked={filters.platforms.includes(platform)}
              className='capitalize'
              onClick={() =>
                filters.platforms.includes(platform)
                  ? setFilters(
                      'platforms',
                      filters.platforms.filter((p) => p !== platform)
                    )
                  : setFilters('platforms', [...filters.platforms, platform])
              }
            >
              {platform}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='hidden capitalize md:flex'>
            Countries -{' '}
            {filters.countries.length === 0 ? 'All' : filters.countries.length}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {countries.map((country, index) => (
            <DropdownMenuCheckboxItem
              key={`countryFilterOption-${index}`}
              checked={filters.countries.includes(country)}
              className='capitalize'
              onClick={() =>
                filters.countries.includes(country)
                  ? setFilters(
                      'countries',
                      filters.countries.filter((c) => c !== country)
                    )
                  : setFilters('countries', [...filters.countries, country])
              }
            >
              {country}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon' className='flex md:hidden'>
            <Filter />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end'>
          <DropdownMenuLabel>Filters</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <CalendarIcon />
                {filters.date.from ? (
                  filters.date.to ? (
                    <>
                      {new Date(filters.date.from).toLocaleDateString()} -{' '}
                      {new Date(filters.date.to).toLocaleDateString()}
                    </>
                  ) : (
                    new Date(filters.date.from).toLocaleDateString()
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <Calendar
                    initialFocus
                    mode='range'
                    defaultMonth={new Date()}
                    selected={
                      filters.date.from
                        ? filters.date.to
                          ? {
                              from: new Date(filters.date.from),
                              to: new Date(filters.date.to)
                            }
                          : { from: new Date(filters.date.from), to: undefined }
                        : undefined
                    }
                    onSelect={(newRange) =>
                      newRange
                        ? newRange.from
                          ? newRange.to
                            ? setFilters('date', {
                                from: newRange.from.toISOString(),
                                to: newRange.to.toISOString()
                              })
                            : setFilters('date', {
                                from: newRange.from.toISOString(),
                                to: undefined
                              })
                          : setFilters('date', {
                              from: undefined,
                              to: undefined
                            })
                        : setFilters('date', {
                            from: undefined,
                            to: undefined
                          })
                    }
                    numberOfMonths={1}
                  />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Platform -{' '}
                {filters.platforms.length === 0
                  ? 'All'
                  : filters.platforms.length}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {platforms.map((platform, index) => (
                    <DropdownMenuCheckboxItem
                      key={`platformFilterOption-${index}`}
                      checked={filters.platforms.includes(platform)}
                      className='capitalize'
                      onClick={() =>
                        filters.platforms.includes(platform)
                          ? setFilters(
                              'platforms',
                              filters.platforms.filter((p) => p !== platform)
                            )
                          : setFilters('platforms', [
                              ...filters.platforms,
                              platform
                            ])
                      }
                    >
                      {platform}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Countries -{' '}
                {filters.countries.length === 0
                  ? 'All'
                  : filters.countries.length}
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {countries.map((country, index) => (
                    <DropdownMenuCheckboxItem
                      key={`countryFilterOption-${index}`}
                      checked={filters.countries.includes(country)}
                      className='capitalize'
                      onClick={() =>
                        filters.countries.includes(country)
                          ? setFilters(
                              'countries',
                              filters.countries.filter((c) => c !== country)
                            )
                          : setFilters('countries', [
                              ...filters.countries,
                              country
                            ])
                      }
                    >
                      {country}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
