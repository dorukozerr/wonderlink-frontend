import { useState } from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { platforms, countries } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
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
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20)
  });

  return (
    <div className='flex h-max w-full items-center justify-end gap-2 border-b border-border p-4'>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
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
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='capitalize'>
            Platform -{' '}
            {selectedPlatform.length === 0 ? 'All' : selectedPlatform.length}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {platforms.map((platform, index) => (
            <DropdownMenuCheckboxItem
              key={`platformFilterOption-${index}`}
              checked={selectedCountries.includes(platform)}
              className='capitalize'
              onClick={() =>
                selectedPlatform.includes(platform)
                  ? setSelectedPlatform((prevState) => [
                      ...prevState.filter(
                        (selectedPlatform) => selectedPlatform !== platform
                      )
                    ])
                  : setSelectedPlatform((prevState) => [...prevState, platform])
              }
            >
              {platform}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' className='capitalize'>
            Countries -{' '}
            {selectedCountries.length === 0 ? 'All' : selectedCountries.length}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {countries.map((country, index) => (
            <DropdownMenuCheckboxItem
              key={`countryFilterOption-${index}`}
              checked={selectedCountries.includes(country)}
              className='capitalize'
              onClick={() =>
                selectedCountries.includes(country)
                  ? setSelectedCountries((prevState) => [
                      ...prevState.filter(
                        (selectedCountry) => selectedCountry !== country
                      )
                    ])
                  : setSelectedCountries((prevState) => [...prevState, country])
              }
            >
              {country}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
