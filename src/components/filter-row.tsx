import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

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
  const [date, setDate] = useState<Date>();

  return (
    <div className='flex h-max w-full items-center justify-end gap-2 border-b border-border p-4'>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
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
