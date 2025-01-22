import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from '@/components/ui/dropdown-menu';

export const Retention = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const platforms = ['ios', 'android'];
  const countries = ['turkey', 'england', 'france', 'united states', 'canada'];

  return (
    <div className='flex h-full w-full flex-col items-start justify-start'>
      <div className='flex h-max w-full items-center justify-end gap-2 border-b border-border p-4'>
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
                    : setSelectedPlatform((prevState) => [
                        ...prevState,
                        platform
                      ])
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
              {selectedCountries.length === 0
                ? 'All'
                : selectedCountries.length}
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
                    : setSelectedCountries((prevState) => [
                        ...prevState,
                        country
                      ])
                }
              >
                {country}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        Retention
      </div>
    </div>
  );
};
